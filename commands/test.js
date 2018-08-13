const Discord = require("discord.js");

function adSend(bot, message) {

  message.channel.send(`If you made a channel called \`#ads\` then you are ready to \`^activate\`. Use \`^desc\` to make a description.`);
}

module.exports.help = {
  name: "test"
}
