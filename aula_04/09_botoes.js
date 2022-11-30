const env = require('../.env');
const { Telegraf, Markup } = require('telegraf');

//criando o objeto bot e o instanciando como um novo objeto da classe Telegraf
const bot = new Telegraf(env.token);

let contagem = 0;

const botoes = Markup.inlineKeyboard([
    Markup.button.callback('+1', 'Adicionar 1'),
    Markup.button.callback('+10', 'Adicionar 10'),
    Markup.button.callback('+100', 'Adicionar 100'),
    Markup.button.callback('-1', 'Remover 1'),
    Markup.button.callback('-10', 'Remover 10'),
    Markup.button.callback('-100', 'Remover 100'),
    Markup.button.callback('Zerar', 'reset'),
    Markup.button.callback('Resultado', 'result')
], { columns: 3 });

bot.start(async ctx => {
    const name = ctx.update.message.from
    await ctx.reply(`Seja bem vindo, ${name.first_name}!`);
    await ctx.reply(`A contagem atual está em ${contagem}`, botoes);
});

bot.action(/Adicionar (\d+)/, ctx=> {
    contagem += parseInt(ctx.match[1]);
    ctx.reply(`A contagem atual está em ${contagem}`, botoes);
})

// bot.action(/Remover (\d+)/, ctx => {
//     contagem -= parseInt(ctx.match[1]);
//     ctx.reply(`A contagem atual está em ${contagem}`, botoes);
// })

bot.action()

bot.action()

bot.startPolling();
