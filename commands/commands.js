const Discord = require("discord.js");

exports.run = async (bot, message, args) => {	
  let botEmbed = new Discord.RichEmbed()
  .setColor('#dff9fb')
  .setDescription("**__My Commands:__**\n❔ **help** - shows information about me.\n📂 **commands** - shows a list of commands.\n🔎 **scan** - creates server files needed for activation.\n🚨 **test** - allowes you to see if your server is set up correctly.\n🏁 **activate** - allows you to share activate ad sending for your server.\n📰 **desc** or **description** - helps you create a good server description.\n📈 **stats** - shows bot stats!\n📨 **invite** - gives you a link to invite me to your server.")
	.setFooter(`PREFIX: ^`);
	message.channel.send(botEmbed)
}
	      
module.exports.help = {
  name: "commands"
}
