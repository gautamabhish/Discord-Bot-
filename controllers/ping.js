import { REST, Routes } from 'discord.js';
import dotenv, { configDotenv } from 'dotenv'
 const  Blueberry = async()=>{
const commands = [
  {
    name: 'blueberry',
    description: 'is not blue',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
}
export  {Blueberry};