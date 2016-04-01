const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function() {
  // Run eslint
  gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format());
  // Node source aka server side code
  gulp.src('es6/**/*.js')
    .pipe(babel())
    . pipe(gulp.dest('dist'));
  // browser source, public code
  // for the record I was able to fill out this part by myself!
  gulp.src('public/es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public/dist'));
});
