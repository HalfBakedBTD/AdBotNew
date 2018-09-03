const Discord = require("discord.js");
const ad = require("../adsave.json");

exports.run = async (bot, message, args) => {
	if (message.author.id !== '346687165868015616') {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
	}
	
    if(!ad[message.guild.id]) return message.channel.send("Please use the command `^scan` to create your server file and cooldown before using this command. If you are in **AdBot Home:** https://discord.gg/UrEpuZR and use the `^scan` command, you ad will be posted every 30 minutes instead of every hour!");
  const newDesc = args.join(" ");
  if(!newDesc) return message.reply("please add the description you want me to send to other servers!\n\nUse: `^description <your server info>`\nExample: `^description This server has all the newest memes!`)")
  if (message.content.toLowerCase().includes('@everyone')) {
    message.reply("you can't tag people in your description!")
    return;
  }
  if (message.content.toLowerCase().includes('@here')) {
    message.reply("you can't tag people in your description!")
    return;
  }
  ad[message.guild.id].desc = `${newDesc}`
  
  let botEmbed = new Discord.RichEmbed()
  .setColor('#27ae60')
  .setTitle('✅ UPDATE ✅')
  .setDescription(`You have now updated your description! If you have already activated ads for your server, then it will now post the updated description!\n\n**__Description:__**\n${newDesc}`);
  message.channel.send(botEmbed)
}
	      
module.exports.help = {
  name: "description"
}
