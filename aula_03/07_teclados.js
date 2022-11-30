const env = require('../.env');
const { Telegraf, Markup } = require('telegraf');

//criando o objeto bot e o instanciando como um novo objeto da classe Telegraf
const bot = new Telegraf(env.token);

const teclado = Markup.keyboard([
    ['🔍 Buscar', '😎 Ajuda'],
    ['📢 Canal', '👥 Grupo'],
]).resize();

bot.start(async ctx => {
    const from = ctx.update.message.from;
    await ctx.reply(`Seja Bem vindo ${from.first_name}!`);
    await ctx.reply(`Escolha uma opção:`, teclado);
});

bot.startPolling();