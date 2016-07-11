var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var htmlbeautify = require('gulp-html-beautify');
var minifyjs = require('gulp-js-minify');
var cleanCSS = require('gulp-clean-css');

gulp.task('styles', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('css/'));
});

gulp.task('boot4', function() {
    gulp.src('boot4/scss/**/bootstrap.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});

gulp.task('htmlbeautify', function() {
  var options = {
    "indent_size": 2,
      };
  gulp.src('../*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('dist/'))
});
var minifyjs = require('gulp-js-minify');

gulp.task('minify-js', function(){
  gulp.src('js/*.js')
    .pipe(minifyjs())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch',function() {
    gulp.watch('scss/**/*.scss',['styles']);
    gulp.watch('boot4/scss/**/"*.scss', ['boot4']);
});
