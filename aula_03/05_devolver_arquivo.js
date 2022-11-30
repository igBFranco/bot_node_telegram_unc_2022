const env = require('../.env');
const { Telegraf } = require('telegraf');

//criando o objeto bot e o instanciando como um novo objeto da classe Telegraf
const bot = new Telegraf(env.token);

const axios = require('axios');

bot.on('voice', async ctx => {
    const id = ctx.update.message.voice.file_id;
    const res = await axios.get(`${env.apiUrl}/getFile?file_id=${id}`);
    console.log(res);
    ctx.replyWithVoice({ 
        url: `${env.apiFileUrl}/${res.data.result.file_path}` 
    });


});




bot.startPolling();