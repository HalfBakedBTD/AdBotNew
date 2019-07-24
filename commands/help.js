const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let botEmbed = new Discord.RichEmbed()
  .setColor('#27ae60')
  .setDescription("I was made by <@487707042224799757> to help small servers grow. \"How?\" you might ask. Well the answer is simple. After you activate ads for your server, I send your ad to ALL other server I am in.\n\nTo prevent dead servers from constantly being advertised, we have a daily reset. Each day all data stored is deleted and if a server is active, they will activate ads again. If it is a dead server, they wont activate ads which roots them out leaving only active servers!\n\nDo `^commands` to get a list of commands.\n\n[donate](https://www.patreon.com/halfbakedpatreon) | [upvote](https://discordbots.org/bot/462783160128765952) | [server](https://discord.gg/UrEpuZR)");
  message.channel.send(botEmbed)
}
	      
module.exports.help = {
  name: "help"
}
