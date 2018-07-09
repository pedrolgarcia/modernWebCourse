// Temporizar tarefas
const schedule = require('node-schedule');

// Criando tarefas
const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 0', function() {
    console.log('Executando tarefa 1!', new Date().getSeconds());
});

setTimeout(function() {
    tarefa1.cancel();
    console.log('Cancelamento tarefa 1!');
}, 20000);

// setImmediate
// setInterval

// Criando regras
const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 12;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 2!', new Date().getSeconds());
});