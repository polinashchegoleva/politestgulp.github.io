'use strict';

var gulp = require('gulp'),
    minCSS = require('gulp-clean-css'),
    gp = require('gulp-load-plugins')();

gulp.task('pug', function() {
    return gulp.src('src/pug/*.pug')
        .pipe(gp.pug())
        .pipe(gulp.dest('build'));
})

gulp.task('sass', function() {
    return gulp.src('src/css/style.scss')
        .pipe(gp.sass())
        .pipe(minCSS())
        .pipe(gulp.dest('build/'));
})