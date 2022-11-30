const env = require('../.env');
const { Telegraf } = require('telegraf');
const moment = require('moment');

//criando o objeto bot e o instanciando como um novo objeto da classe Telegraf
const bot = new Telegraf(env.token);

bot.hears('pizza', ctx => {
    ctx.reply('Quero!')
});

bot.hears(['macarrao', 'lasanha'], ctx => {
    ctx.reply('Nao quero!')
});

bot.hears('😜', ctx => {
    ctx.reply('🤩')
});

//utilizando com expressoes regulares
bot.hears(/burguer/i, ctx => {
    ctx.reply('Hamburguer !')
});

//utilizando o hears com datas
bot.hears(/(\d{2}\/\d{2}\/\d{4})/g, ctx => {
    moment.locale('pt-br');
    const data = moment(ctx.match[1], 'DD/MM/YYYY');
    ctx.reply(`${ctx.match[1]} cai em ${data.format('dddd')}`);
});

bot.startPolling();