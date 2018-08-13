const Discord = require("discord.js");
const ad = require("../adsave.json");

exports.run = async (bot, message, args) => {
	message.channel.send("Add me to your server -----> \n\thttps://discordapp.com/oauth2/authorize?client_id=462783160128765952&permissions=8&scope=bot");
}
	      
module.exports.help = {
  name: "invite"
}
