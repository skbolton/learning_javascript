const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function() {
  // Node source aka server side code
  gulp.src('es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
  // browser source, public code
  // for the record I was able to fill out this part by myself!
  gulp.src('public/es6/**/.js')
    .pipe(babel())
    .pipe(gulp.dest('public/dist'));
});
