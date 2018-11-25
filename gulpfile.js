'use strict';

var gulp = require('gulp'),
    gp = require('gulp-load-plugins')();

gulp.task('pug', function() {
    return gulp.src('src/pug/*.pug')
        .pipe(gp.pug())
        .pipe(gulp.dest('build'));
})