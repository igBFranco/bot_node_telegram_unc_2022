const env = require('../.env');
const { Telegraf } = require('telegraf');

//criando o objeto bot e o instanciando como um novo objeto da classe Telegraf
const bot = new Telegraf(env.token);

bot.start(ctx => {
    const from = ctx.update.message.from;
    ctx.reply(`Seja bem vindo, ${from.first_name}!`);
})

bot.on('text', async (ctx, next) => {
    await ctx.reply('Resposta 1');
    next();
})
bot.on('text', async (ctx, next) => {
    await ctx.reply('Resposta 2');
})


//iniciando o pooling com o servidor para verificar se ha novas mensagens
bot.startPolling();