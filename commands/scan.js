const Discord = require("discord.js");
const ad = require("../adsave.json");

exports.run = async (bot, message, args) => {
  return message.channel.send("Comming Soon!");
}
	      
module.exports.help = {
  name: "scan"
}
