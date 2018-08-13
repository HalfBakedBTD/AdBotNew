const Discord = require("discord.js");
const ad = require("../adsave.json");

exports.run = async (bot, message, args) => {
  if(!message.author.id === '284137818895417344') return message.reply("this is an owner only command.");
  let arges = args.join(" ");
  bot.user.setGame(`${arges}`);
}

module.exports.help = {
  name: "play"
}
