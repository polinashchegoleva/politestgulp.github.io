'use strict';

var gulp = require('gulp'),
    minCSS = require('gulp-clean-css'),
    gp = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    browserSync.watch('build',browserSync.reload)
});

gulp.task('pug', function() {
    return gulp.src('src/pug/*.pug')
        .pipe(gp.pug())
        .pipe(gulp.dest('build'));
});

gulp.task('sass', function() {
    return gulp.src('src/css/style.scss')
        .pipe(gp.sass())
        .pipe(gp.autoprefixer({
            browsers: ['last 10 versions']
        }))
        .pipe(minCSS())
        .pipe(gulp.dest('build/'));
});

gulp.task('watch', function () {
    gulp.watch('src/pug/index.pug',gulp.series('pug'));
    gulp.watch('src/css/style.scss',gulp.series('sass'))
});

gulp.task('default',gulp.series(
    gulp.parallel('pug', 'sass'),
    gulp.parallel('watch', 'serve')
));