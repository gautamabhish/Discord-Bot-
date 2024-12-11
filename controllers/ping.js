import { REST, Routes, SlashCommandBuilder } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const Blueberry = async () => {
  

  const commands = [
    new SlashCommandBuilder()
      .setName('blueberry')
      .setDescription('Ask freely!')
      .addStringOption(option =>
        option.setName('chat')
          .setDescription('Your question')
          .setRequired(true)
      ),
  ].map(command => command.toJSON());

  const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

  try {
    console.log('Started refreshing application (/) commands.');

    
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID), 
      { body: commands }
    );
  } catch (error) {
    console.error('Error registering commands:', error);
  }
};

export { Blueberry };
