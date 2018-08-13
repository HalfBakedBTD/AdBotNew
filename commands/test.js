const Discord = require("discord.js");
const ad = require("../adsave.json");

function adSend(bot, message) {

  bot.user.setGame(`If you made a channel called \`#ads\` then you are ready to \`^activate\`. Use \`^desc\` to make a description.`);
}

module.exports.help = {
  name: "test"
}
