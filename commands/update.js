const Discord = require("discord.js");
const ad = require("../adsave.json");

function adSend(bot, message) {

  bot.user.setGame(`^help | On ${bot.guilds.size} servers.`);
}

module.exports.help = {
  name: "update"
}
