import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";
import { handleMessage } from "./src/message-handler.js";

// Intents control which gateway events and message content the bot can receive.
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent, // Allows the bot to read message text.
  ],
});

// Report when the bot is ready after logging in.
client.once("ready", () => {
  console.log(`Bot conectado como: ${client.user.tag}`);
});

client.on("messageCreate", handleMessage);

// Connect using DISCORD_TOKEN from the environment or a local .env file.
client.login(process.env.DISCORD_TOKEN);
