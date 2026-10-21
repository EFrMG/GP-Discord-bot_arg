require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const { handleMessage } = require("./src/message-handler");

// Configuración de intents (permisos de conexión a eventos)
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent, // Permite leer el texto
  ],
});

// Evento cuando el bot inicia sesión correctamente
client.once("ready", () => {
  console.log(`Bot conectado como: ${client.user.tag}`);
});

client.on("messageCreate", handleMessage);

// Conectar el bot usando el token del archivo .env
client.login(process.env.DISCORD_TOKEN);
