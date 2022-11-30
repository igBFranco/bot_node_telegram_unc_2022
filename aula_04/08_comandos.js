const env = require('../.env');
const { Telegraf, Markup } = require('telegraf');

//criando o objeto bot e o instanciando como um novo objeto da classe Telegraf
const bot = new Telegraf(env.token);

bot.start(ctx => {
    const name = ctx.update.message.from
    ctx.reply(`Seja bem vindo, ${name.first_name}!\nAvise se precisar de /ajuda`);

});

bot.command('ajuda', ctx => {
    ctx.reply(`/ajuda: Vou mostrar as opções:
    \n/ajuda2: Para testar via hears
    \n/op2: Opção genérica
    \n/op3: Outra opção genérica`);
});

bot.hears('ajuda2', ctx => {
    ctx.reply(`Eu também consigo capturar comandos, mas utilize /ajuda que é melhor!`);
});

bot.hears(/\/op(2|3)/, ctx => {
    ctx.reply(`Resposta para op2 ou op3`);
});

bot.startPolling();