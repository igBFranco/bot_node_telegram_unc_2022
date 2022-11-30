const env = require('../.env');
const { Telegraf } = require('telegraf');

//criando o objeto bot e o instanciando como um novo objeto da classe Telegraf
const bot = new Telegraf(env.token);

bot.start(ctx => {
    const from = ctx.update.message.from;
    if(from.username === 'igorbfranco'){
        ctx.reply(`Olá ${from.first_name}!`);
        console.log(ctx.update.message);
    }else {
        ctx.reply(`Desculpe, mas eu só falo com o meu mestre!`);
    }
})


bot.startPolling();