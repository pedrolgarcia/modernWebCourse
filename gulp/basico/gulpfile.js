const gulp = require('gulp');

gulp.task('default', () => { // comando gulp executa a task default por padrão
    gulp.start('copiar', 'fim'); // passando outras tasks para serem executadas
});

gulp.task('copiar', ['antes1', 'antes2'], () => { // passamos um array com as tasks dependências para que essa seja executada
    console.log('Copiar!!!');
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) // define os arquivos em que o gulp irá trabalhar. Aceita expressões
    gulp.src('pastaA/**/*.txt') // expressão - pega todas as subpastas e todos os arquivos txt
        // pipe and filter
        //.pipe(transformacao1) // fazemos as alterações
        //.pipe(transformacao2)
        .pipe(gulp.dest('pastaB')); // definimos o destino dos arquivos finais transformados
});

gulp.task('antes1', () => { // pré-requisito 1 para executar copiar
    console.log('Antes1!!!');
});

gulp.task('antes2', () => { // pré-requisito 2 para executar copiar e só executa depois de antes 1
    console.log('Antes2!!!');
});

gulp.task('fim', () => { // após antes 1 e antes 2, executa copiar, e logo depois executa fim
    console.log('Fim!!!');
});