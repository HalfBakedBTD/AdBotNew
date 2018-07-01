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
	
	let modEmbed = new Discord.RichEmbed()
  .setColor('#4834d4')
  .setDescription("e server.\n:recycle: **^recycle** - Clears messages. Equivilent to \`purge\` or \`clear\` on other bots.\n:cloud: **^purge-check** - Checks and tells you how many people will be pruned.\n:thunder_cloud_rain: **^purge** - Prunes members who have been inactive for a week.\n⚠ **^warn** - Warns a member in the server.");
	//message.author.send(modEmbed)
	
	let adEmbed = new Discord.RichEmbed()
  .setColor('#eb4d4b')
  .setDescription("**__Main Commands:__**\n:arrow_heading_up: **^activate** - Bumps your server to the top of the advertising slot continuasly.\n**^desc** - Lets you make a description for your server. (`^desc` or `^description`)\n**^search** - lets you search servers that I am in by name.");
	message.author.send(adEmbed)
	
	let infoEmbed = new Discord.RichEmbed()
  .setColor('#be2edd')
  .setDescription("**__Shorcuts:**\n:mailbox: **^info** - Gives various info about AdBot.\n:e_mail: **^invite** - Sends you and invite to add AdBot to your server.\n:pizza: **^server** - Links you to AdBot's official server.");
	//message.author.send(infoEmbed)
	
	let linkEmbed = new Discord.RichEmbed()
  .setColor('#6ab04c')
	.setDescription("**Helpful Links:**\n[Invite](https://discordapp.com/oauth2/authorize?client_id=421744026740457474&permissions=8&scope=bot) | [Discord](https://discord.gg/REkAA2X) | [Upvote](https://discordbots.org/bot/421744026740457474)");
	message.author.send(linkEmbed)
}
	      
module.exports.help = {
  name: "commands"
}
