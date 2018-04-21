const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("NO! ADMIN ONLY! OMG!");
	if (message.content === '^kk') {
		message.guild.channels.filter(c => c.name === 'adbot-welcome-message').forEach(channel => {
		  channel.delete()
  			.then(console.log)
  			.catch(console.error);
		});
		return message.channel.send(`\`All AdBot welcome channels are deleted.\``)
}

module.exports.help = {
  name: "kk"
}
