const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss'); // uglify para js e uglifycss para css
const concat = require('gulp-concat');

gulp.task('default', ['copiarHtml'], () => {
    gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError)) // mostrar erro do transpile se houver
        .pipe(uglifycss({ uglyComments: true })) // comprimi o css ao máximo, uglycomments comprimi os comentários também
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('copiarHtml', () => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'));
});