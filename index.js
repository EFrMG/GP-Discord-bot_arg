require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

// Configuración de intents (permisos de conexión a eventos)
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent, // Permite leer el texto
  ],
});

// Evento cuando el bot inicia sesión correctamente
client.once('ready', () => {
  console.log(`Bot conectado como: ${client.user.tag}`);
});

// Lista de GIFs para saludos
const gifsHola = [
  'https://media.giphy.com/media/dzaUX7CAG0Ihi/giphy.gif',
  'https://media.giphy.com/media/3pZipqyo1sqUCaA0bL/giphy.gif',
  'https://media.giphy.com/media/ASd0Ukj0BCcGqG4LDT/giphy.gif',
];

// Evento que escucha todos los mensajes enviados
client.on('messageCreate', async (message) => {
  // Ignorar mensajes de otros bots (o de sí mismo) para evitar bucles infinitos
  if (message.author.bot) return;

  const texto = message.content.toLowerCase();

  // Caso 1: Coincidencia exacta o respuesta a saludos
  if (texto === '!ping') {
    await message.reply('¡Pong!');
  }

  // Caso 2: Detectar palabras clave en cualquier parte del texto
  if (texto.includes('hola') || texto.includes('buenas')) {
    // Escoger uno al azar del array
    const gifAleatorio = gifsHola[Math.floor(Math.random() * gifsHola.length)];

    await message.reply({
      content: `¡Hola, ${message.author.username}!`,
      files: [gifAleatorio],
    });
  }

  // Caso 3: Comando simple con prefijo
  if (texto.startsWith('!decir ')) {
    const loQueDijo = message.content.slice(7); // Quitar '!decir '
    await message.channel.send(`El usuario dijo: "${loQueDijo}"`);
  }
});

// Conectar el bot usando el token del archivo .env
client.login(process.env.DISCORD_TOKEN);