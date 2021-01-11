const gulp = require('gulp')
const { series, parallel } = require('gulp') // Ou const series = gulp.series

// EXERCÍCIO 1
// const antes1 = cb => {
//     console.log('Tarefa antes 1!')
//     return cb()
// }
// const antes2 = cb => {
//     console.log('Tarefa antes 2!')
//     return cb()
// }
// const antes3 = cb => {
//     console.log('Tarefa antes 3!')
//     return cb()
// }
// const fim = cb => {
//     console.log('fim')
//     return cb()
// }

//module.exports = series(copy) -> Não vai funcionar, pois por padrão é necessário exportar uma task "default", a porta de entrada para o Gulp
// O melhor jeito de fazer isso é incluir um atributo no module.exports chamado "default"
// module.exports.default = series(
//     parallel(antes1, antes2),
//     antes3,
//     fim
// )

// EXERCÍCIO 2
function copy1(cb) { // A callback cb é passado pelo próprio gulp como parâmetro
    // O .src() é a função que "coleta" arquivos que serão utilizados como insumos das tarefas do .pipe()
    gulp.src(['./pastaA/arquivo1.txt', './pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB'))

    return cb() // Sinalização de que a tarefa foi finalizada, notificando isso ao Gulp
}
function copy2(cb) {

    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('./pastaC'))
    return cb()
}

// module.exports.default = gulp.series(
//     copy1,
//     copy2
// )
module.exports.default = series(
    copy1,
    copy2
)
