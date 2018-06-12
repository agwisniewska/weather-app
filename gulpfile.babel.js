"use strict";
import gulp from "gulp";
import del from "del";
import clean from "gulp-clean";
import uglify from "gulp-uglify";
import tsify from 'tsify';
import babel from "gulp-babel";
import rename from "gulp-rename";
import streamify from 'gulp-streamify';
import browserify from "browserify";
import source from "vinyl-source-stream";
import templateCache from "gulp-angular-templatecache";
import ngAnnotate from "browserify-ngannotate";
import sass from "gulp-sass";
import notify from "gulp-notify";
import browserSync from "browser-sync";
import ts from 'gulp-typescript';
browserSync.create();
const tsProject = ts.createProject("tsconfig.json");

let interceptErrors = function (error) {
  let args = Array.prototype.slice.call(arguments);

  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  this.emit('end');
};


gulp.task("default", ["clean", "scripts", "sass", "html", "watch"], function () {
  browserSync.init(["./build/**/**.**"], {
    server: "./build",
    port: 4000,
    notify: true
  });
});

gulp.task("html", function () {
  gulp.src("./src/index.html").pipe(gulp.dest("./build"));
});

// gulp.task("views", function () {
//   return gulp
//     .src("./src/**/**/*.html")
//     .pipe(
//       templateCache({
//         standalone: true
//       })
//     )
//     .on('error', interceptErrors)
//     .pipe(rename("weather.templates.js"))
//     .pipe(gulp.dest("./src/weather"));
// });

gulp.task('views', function () {
  return gulp.src('./src/**/**/*.html')
    .pipe(templateCache({
      standalone: true,
    }))
    .pipe(rename("weather.templates.js"))
    .pipe(gulp.dest('./src/'));
});

// gulp.task("views", function () {
//   return gulp
//     .src("./src/**/**/*.html")
//     .on('error', interceptErrors)
//     .pipe(gulp.dest("./build/views"));
// });

gulp.task("clean", function () {
  return del(["./build/*", "./src/weather/weather.templates.js"]);
});

gulp.task("scripts", ["views"], function () {
  return browserify({
      entries: "./src/weather/weather.module.ts",
      debug: true
    })
    .plugin(tsify)
    .transform("babelify", {
      presets: ["es2015"]
    })
    .transform(ngAnnotate)
    .bundle()
    .pipe(source("app.min.js"))
    // .pipe(streamify(uglify()))
    .pipe(gulp.dest("./build"));
});

gulp.task("sass", function () {
  return gulp
    .src("./src/weather/weather.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./build"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

gulp.task(
  "watch", ["scripts:watch", "templates:watch", "html:watch"],
  function () {}
);

gulp.task("html:watch", function () {
  gulp.watch("./src/*.html", ["html"]).on("change", browserSync.reload);
});
gulp.task("templates:watch", function () {
  gulp.watch("./src/weather/**/*.html", ["views"]);
});

gulp.task("scripts:watch", function () {
  gulp.watch("./src/**/**/*.ts", ["scripts"]).on("change", browserSync.reload);
});
