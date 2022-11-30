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

//tratando eventos de texto
bot.on('text', ctx => { 
    const texto = ctx.update.message.text;
    console.log(texto);
    ctx.reply(`O texto recebido foi: ${texto}`);
});

//tratando eventos de localizacao
bot.on('location', ctx => {
    const loc = ctx.update.message.location;
    console.log(loc);
    ctx.reply(`Voce esta em: 
        Latitude: ${loc.latitude},
        Longitude: ${loc.longitude}
        `);
});

//tratando eventos de contato
bot.on('contact', ctx => {
    const contato = ctx.update.message.contact;
    console.log(contato);
    ctx.reply(`Vou lembrar do(a) ${contato.first_name} (${contato.phone_number})`);
});

//tratando eventos de audio
bot.on('voice', ctx => {
    const voz = ctx.update.message.voice;
    console.log(voz);
    ctx.reply(`Audio recebido, ele tem ${voz.duration} segundos`);
});

//tratando eventos de foto
bot.on('photo', ctx => {
    const foto = ctx.update.message.photo;
    console.log(foto);
    console.log(foto.length);
    foto.forEach((photo, i) => {
        ctx.reply(`A ${i}a foto tem resolucao de ${photo.width}x${photo.height}`);
    });
});

//tratando eventos de sticker
bot.on('sticker', ctx => {
    const sticker = ctx.update.message.sticker;
    console.log(sticker);
    ctx.reply(`Estou vendo que voce enviou o sticker ${sticker.emoji} do conjunto ${sticker.set_name}`);
})



//iniciando o pooling com o servidor para verificar se ha novas mensagens
bot.startPolling();