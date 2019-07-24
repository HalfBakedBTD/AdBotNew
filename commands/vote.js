const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let botEmbed = new Discord.RichEmbed()
  .setColor('#27ae60')
  .setDescription("Vote Here: `Comming soon...`");
  message.channel.send(botEmbed)
}
	      
module.exports.help = {
  name: "vote"
}
