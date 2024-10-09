const TelegramBot = require('node-telegram-bot-api');
const token = '8180698812:AAFzqD-H-Vo1Kcw6nZd_3GsLgYF_szu1kOE';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '/start') {
    const startButton = {
      "inline_keyboard": [
        [
          {
            "text": "Start",
            "url": "https://blood-atm.netlify.app/"
          }
        ]
      ]
    };

    bot.sendMessage(chatId, 'Welcome to Blood ATM!', {
      reply_markup: JSON.stringify(startButton)
    });
  }
});
