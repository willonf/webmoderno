const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function monitorarArquivos() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080, // Indica a porta onde será executado o servidor
            open: true, // Abertura no navegador
            livereload: true // Recarregar automaticamente sempre que houver mudança no código
        }))
}

function servidor(cb) {
    // Indicar o que deve ser observado e o que deve ser feito caso haja alterações
    watch(('./src/**/*.html'), () => gulp.series('appHTML')()) 
    watch(('./src/**/*.scss'), () => gulp.series('appCSS')()) 
    watch(('./src/**/*.js'), () => gulp.series('appCSS')()) 
    watch(('./src/assets/imgs/**/*.*'), () => gulp.series('appIMG')()) 

    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}