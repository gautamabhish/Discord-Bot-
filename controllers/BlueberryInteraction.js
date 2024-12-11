import { aiPrompt } from "./aiModel.js";

export const BlueberryInteraction = async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;
 

  if (commandName === 'blueberry') {
    const userQuestion = interaction.options.getString('chat'); 
    
    if (userQuestion) {
      try {
        const reply = await aiPrompt(userQuestion); 
        
        await interaction.reply(reply); 
      } catch (error) {
        
        await interaction.reply('Error processing your request. Please try again later.');
      }
    } else {
      
      await interaction.reply('Please provide a question after /blueberry.');
    }
  }
};
