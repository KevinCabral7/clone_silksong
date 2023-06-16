const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compilaSass(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/styles/'));
}

function compilaJs(){
    return gulp.src('./src/scripts/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

function compilaImagem(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images/'))
}

exports.default = gulp.parallel(compilaSass, compilaJs, compilaImagem)
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(compilaSass))
    gulp.watch('./src/scripts/*.js', gulp.parallel(compilaJs))
}