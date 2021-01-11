const { series, parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('./src/sass/index.scss') // Estamos pegando o arquivo index do SCSS que possui o endereço para os demais arquivos
        .pipe(sass().on('error', sass.logError)) // A função sass() traduz para CSS e o .on() passará o log de erro casa haja algum
        .pipe(uglifycss({
            "uglyComments":true
        }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('./build/css'))
}

function copiarHTML(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./build'))
}

module.exports.default = parallel(transformacaoCSS, copiarHTML)