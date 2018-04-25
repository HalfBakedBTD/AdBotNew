const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let conEmbed = new Discord.RichEmbed()
  .setColor('#badc58')
  .setDescription(`**${message.author.username}**, I am privately messaging you my commands!`)
  message.channel.send(conEmbed)
	
  let botEmbed = new Discord.RichEmbed()
  .setColor('#dff9fb')
  .setDescription("**Info Commands:**\n:question: **^help** - Shows list of commands in the channel the command is sent in.\n:grey_question: **^commands** - DMs you a list of my commands.\n:closed_book: **^test** - Helps you set up your server.\n:open_file_folder: **^create** - Automaticly sets up your server for you.");
	message.author.send(botEmbed)
	
	let modEmbed = new Discord.RichEmbed()
  .setColor('#4834d4')
  .setDescription("**Moderation Commands:**\n:hammer: **^ban** - Bans a member in the server.\n:boot: **^kick** - Kicks a member in the server.\n:recycle: **^recycle** - Clears messages. Equivilent to \`purge\` or \`clear\` on other bots.\n:cloud: **^purge-check** - Checks and tells you how many people will be pruned.\n:thunder_cloud_rain: **^purge** - Prunes members who have been inactive for a week.\n⚠ **^warn** - Warns a member in the server.");
	message.author.send(modEmbed)
	
	let adEmbed = new Discord.RichEmbed()
  .setColor('#eb4d4b')
  .setDescription("**Advertising Commands:**\n:arrow_heading_up: **^ad** - Bumps your server to the top of the advertising slot.\n🐦 **^youtube** - advertises youtube channels based on channel IDs.\n💜 **^twitch** - advertises twitch channels based on links.");
	message.author.send(adEmbed)
	
	let infoEmbed = new Discord.RichEmbed()
  .setColor('#be2edd')
  .setDescription("**Other Commands:**\n:mailbox: **^info** - Gives various info about AdBot.\n:e_mail: **^invite** - Sends you and invite to add AdBot to your server.\n:pizza: **^server** - Links you to AdBot's official server.");
	message.author.send(infoEmbed)
	
	let linkEmbed = new Discord.RichEmbed()
  .setColor('#6ab04c')
	.setDescription("**Help AdBot out by:**\n[Invite](https://discordapp.com/oauth2/authorize?client_id=421744026740457474&permissions=8&scope=bot) | [Discord](https://discord.gg/REkAA2X) | [Upvote](https://discordbots.org/bot/421744026740457474)");
	message.author.send(linkEmbed)
}
	      
module.exports.help = {
  name: "commands"
}
