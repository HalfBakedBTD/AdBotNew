const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let conEmbed = new Discord.RichEmbed()
  .setColor('#badc58')
  .setDescription(`**${message.author.username}**, I am privately messaging you my commands!`)
  message.channel.send(conEmbed)
	
  let botEmbed = new Discord.RichEmbed()
  .setColor('#dff9fb')
  .setDescription("****Info Commands:****\n:question: **^help** - Shows some of my information.\n:grey_question: **^commands** - DMs you a list of my commands.\n:closed_book: **^test** - Helps you set up your server.");
	message.author.send(botEmbed)
	
	let adEmbed = new Discord.RichEmbed()
  .setColor('#eb4d4b')
  .setDescription("**__Main Commands:__**\n:arrow_heading_up: **^activate** - Bumps your server to the top of the advertising slot continuasly.\n:newspaper: **^desc** - Lets you make a description for your server. (`^desc` or `^description`)\n:mag_right: **^search** - lets you search servers that I am in by name.");
	message.author.send(adEmbed)
	
	let linkEmbed = new Discord.RichEmbed()
  .setColor('#6ab04c')
	.setDescription("**Helpful Links:**\n[Invite](https://discordapp.com/oauth2/authorize?client_id=462783160128765952&permissions=8&scope=bot) | [Discord](https://discord.gg/REkAA2X) | [Upvote](https://www.bing.com/images/search?q=comming+soon&FORM=HDRSC2)");
	message.author.send(linkEmbed)
}
	      
module.exports.help = {
  name: "commands"
}
