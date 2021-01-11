const gulp = require('gulp') // Importação do Gulp
const { series } = require('gulp') // Importação do series para tasks em série
const ts = require('gulp-typescript') // Importação do integrador Gulp-Typescript
const { createBinary } = require('typescript')
const tsProject = ts.createProject('tsconfig.json') // Usado para compilar uma cadeia de arquivos Typescript, usando as configurações dp tsconfig.json


function transformacaoTS() {
    return tsProject.src() // Não foi passado o parâmetro pois o tsProject já tem o endereço dos arquivos
        .pipe(tsProject()) // Responsável pela compilação
        .pipe(gulp.dest('./build'))
}

module.exports.default = series(transformacaoTS)