import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from "dotenv";
// import { Blueberry } from './controllers/ping.js';
import { aiPrompt } from './controllers/aiModel.js';
dotenv.config();
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent], });
// Blueberry();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message)=>{
    if (message.author.bot) return ;
     const reply = await aiPrompt(message.content)
    console.log(reply);
    message.reply(reply );
})


client.login(process.env.TOKEN);
