const env = require('../.env');
const { Telegraf } = require('telegraf');

//criando o objeto bot e o instanciando como um novo objeto da classe Telegraf
const bot = new Telegraf(env.token);

// respondendo com html
bot.start(ctx => {
    const user = ctx.update.message.from;
    ctx.replyWithHTML(`Seja bem vindo, <b>${user.first_name}</b>
    <i>Eu sou um bot em treinamento!</i>
    <a href="https://www.google.com">Google</a>`);
    ctx.replyWithMarkdownV2(`
    **Eu sou um bot em treinamento**
    [Google](https://www.google.com)`)

    //respondenddo com fotos externas
    ctx.replyWithPhoto({ url: 'https://www.gstatic.com/webp/gallery/1.jpg' });

    //respondendo com fotos locais
    ctx.replyWithPhoto({ 
        source: `${__dirname}/1.png`,
        caption: "Eu sou um bot em treinamento"
    });

    //respondendo com videos
    ctx.replyWithVideo('https://www.commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4');
});




bot.startPolling();