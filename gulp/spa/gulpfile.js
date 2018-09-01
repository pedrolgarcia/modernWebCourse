const gulp = require('gulp');
const util = require('gulp-util');
const sequence = require('run-sequence'); // executa as tasks em série, já que o gulp executa em paralelo
                                          // Gulp 4 já trata isso

// importando os arquivos que contém as tasks
require('./gulpTasks/app');
require('./gulpTasks/deps');
require('./gulpTasks/server');

gulp.task('default', () => {
    /*
        if(util.env.production) { verifica se há alguma flag "production", quando chamamos o gulp
            sequence('deps', 'app'); // executa tasks em sequência
            // gulp.start('deps', 'app'); gulp.start - gulp 4 - executa em sequencia ou paralelo
        } else {
            sequence('deps', 'app', 'server');
            // gulp.start('deps', 'app', 'server');
        }
    */ 
    util.env.production ? sequence('deps', 'app') : sequence('deps', 'app', 'server'); 
});