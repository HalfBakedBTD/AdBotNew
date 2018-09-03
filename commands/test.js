const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  if (message.author.id !== '346687165868015616') {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("only Admins can test the setup of the server.");
	}
  let adschannel = message.guild.channels.find(`name`, "ads");
  if(!adschannel) return message.channel.send("Hmm, I couldn't find a channel camed **#ads**. Please make one and use `^test` again.");
  if(!ad[message.guild.id]) return message.channel.send("Please use the command `^scan` to create your server file! After you do so, type `^test` again.");
  return message.channel.send("This server is all set up! You can `^activate` it now!");  
  //message.channel.send(`If you made a channel called \`#ads\` then you are ready to \`^activate\`. Use \`^desc\` to make a description.`);
}

module.exports.help = {
  name: "test"
}
