const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let botEmbed = new Discord.RichEmbed()
  .setColor('#27ae60')
  .setDescription("Vote Here: https://discordbots.org/bot/462783160128765952");
  message.channel.send(botEmbed)
}
	      
module.exports.help = {
  name: "vote"
}
