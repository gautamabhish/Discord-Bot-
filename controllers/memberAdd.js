export default async function  NewMember (member) {
    try {
      // Send a DM to the new member
      await member.send('Welcome to the server! Feel free to ask any questions!');
      console.log(`Sent a welcome DM to ${member.user.tag}`);
    } catch (error) {
      console.error(`Failed to send DM to ${member.user.tag}:`, error);
    }
  }