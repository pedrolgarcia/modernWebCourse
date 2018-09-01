const gulp = require('gulp');
const watch = require('gulp-watch');
const webserver = require('gulp-webserver');

gulp.task('monitorate', () => {
    // monitora os arquivos específicos e faz o build 
    watch('src/**/*.html', () => gulp.start('app.html')); 
    watch('src/**/*.scss', () => gulp.start('app.css'));
    watch('src/**/*.js', () => gulp.start('app.js'));
    watch('src/assets/imgs/**/*.*', () => gulp.start('app.imgs'));
});

gulp.task('server', ['monitorate'], () => {
    return gulp.src('build').pipe(webserver({
        livereload: true, // recarrega a página depois de um build
        port: 8080,
        open: true // abre o browser depois do build
    }));
});