const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformJS(cb) {
    return gulp.src('./src/**/*.js') // Outra opçãop para a chamada de cb() é retornaro fluxo de trabalho
        .pipe(babel({
            comments: false, // Os comentários dos arquivos não serão incluídos
            presets: ["env"] // O valor "env" significa que estamos utilizando a versão mais recente do JS
        }))
        .pipe(uglify()) // Nenhum parâmetro é passado. Ele minifica o código
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js')) // Pega todos os arquivos compilados pelo Babel e concatena. O parâmetro é um string com o nome do arquivo gerado
        .pipe(gulp.dest('./build'))
    // return cb()
}

function fim(cb) {
    console.log('FIM!')
    return cb()
}

exports.default = series(transformJS, fim)