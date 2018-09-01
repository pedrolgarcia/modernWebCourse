const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json'); // criar um projeto typescript passando seu arquivo de configuração

gulp.task('default', () => {
    return tsProject.src() // não precisa especificar o arquivo pois já tem no arquivo de configuração
            .pipe(tsProject()) // faz o transpile
            .pipe(gulp.dest('build'));
});