const TelegramBot = require('node-telegram-bot-api');
const token = '7514924456:AAE3Ka3YPnzb_C0jiZe9DL22w3R2f7A19pg';
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
            "url": "https://blood-map.netlify.app/"
          }
        ]
      ]
    };

    bot.sendMessage(chatId, 'Welcome to Blood MAP!', {
      reply_markup: JSON.stringify(startButton)
    });
  }
});
