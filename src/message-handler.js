const { isPing, isGreeting, isDecir, getFoodCategory } = require("./matching");
const { greetingGifs, foodGifs } = require("./media");

async function handleMessage(
  message,
  random = Math.random,
  foodMedia = foodGifs,
) {
  if (message.author.bot) return;

  const text = message.content.toLowerCase();

  if (isPing(text)) {
    await message.reply("¡Pong!");
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

  const foodCategory = getFoodCategory(message.content);
  const isFoodQuestion = foodCategory !== null;
  if (isFoodQuestion) {
    const options = foodMedia[foodCategory] || [];
    if (options.length > 0) {
      const selected = options[Math.floor(random() * options.length)];
      await message.reply({ files: [selected] });
    }
  }
}

module.exports = { handleMessage };
