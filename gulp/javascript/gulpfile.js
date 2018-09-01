const gulp = require('gulp');
const concat = require('gulp-concat'); // concatena vários arquivos
const uglify = require('gulp-uglify'); // minifica o código para otimizar na web
const babel = require('gulp-babel'); // faz um transpile de um código que não é entendido pelo browser para javascript puro
                                     // Exemplos: recursos js novos, linguagens como JSX e typescript

gulp.task('default', () => {
    return gulp.src('src/**/*.js')
            .pipe(babel({
                minified: true, // também minifica o código
                comments: false,
                presets: ["env"] // mais moderno
            }))
            // .pipe(uglify()) não suporta versões mais antigas do js, precisa do babel para fazer o parser
            .on('error', function(err) { console.log(err) }) // mostra o erro mais detalhado 
            .pipe(concat('codigo.min.js'))
            .pipe(gulp.dest('build'));
});