const { isPing, isGreeting, isDecir } = require('./matching');
const { greetingGifs } = require('./media');

async function handleMessage(message, random = Math.random) {
  if (message.author.bot) return;

  const text = message.content.toLowerCase();

  if (isPing(text)) {
    await message.reply('¡Pong!');
  }

  if (isGreeting(text)) {
    const gif = greetingGifs[Math.floor(random() * greetingGifs.length)];
    await message.reply({
      content: `¡Hola, ${message.author.username}!`,
      files: [gif],
    });
  }

  if (isDecir(text)) {
    const said = message.content.slice(7);
    await message.channel.send(`El usuario dijo: "${said}"`);
  }
}

module.exports = { handleMessage };
