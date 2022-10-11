const env = require('../.env');
const { Telegraf } = require('telegraf');

//criando o objeto bot e o instanciando como um novo objeto da classe Telegraf
const bot = new Telegraf(env.token);

bot.start(ctx => {
    const from = ctx.update.message.from;
    ctx.reply(`Seja bem vindo, ${from.first_name}!
        Eu sou um bot em treinamento!
        Por enquanto eu :
        - Repito o que voce digita
        - digo as coordemadas de latitude e longitude
        - retorno o nome e o telefone de um contato que voce me enviar
        - ouco uma mensagem e audio e retorno a duracao
        - informo a resolucao das fotos que voce me enviar
    `);
})



//iniciando o pooling com o servidor para verificar se ha novas mensagens
bot.startPolling();