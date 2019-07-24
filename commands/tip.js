const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let botEmbed = new Discord.RichEmbed()
  .setColor('#27ae60')
  .setDescription("To grow your server faster, upvote the bot. Upvoting it puts it in featured where more people see it and then, add it. With more people adding it, your ad for your server goes to more people. This makes more see it and a bigger chance people will join.\n\nUpvote Link: `Comming soon...`");
  message.channel.send(botEmbed)
}
	      
module.exports.help = {
  name: "tip"
}
