const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("NO! ADMIN ONLY! OMG!");
  message.guild.channels.filter(channel => channel.name === 'adbot-welcome-message').forEach(channel => channel.delete());
  return message.channel.send(`\`All AdBot welcome channels are deleted.\``)
}

module.exports.help = {
  name: "kk"
}
