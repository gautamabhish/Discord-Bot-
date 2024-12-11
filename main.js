import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from "dotenv";
import { Blueberry } from './controllers/ping.js';
import { BlueberryInteraction } from './controllers/BlueberryInteraction.js';
import NewMember from './controllers/memberAdd.js';
dotenv.config();
 Blueberry();
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent,GatewayIntentBits.GuildMembers], });
// Blueberry();
client.on('ready', () => {
  
});

client.on('interactionCreate',(interaction)=>BlueberryInteraction(interaction));


client.on('guildMemberAdd', (member)=> NewMember(member));

client.login(process.env.TOKEN);
