const Discord = require("discord.js");
const ad = require("../adsave.json");

exports.run = async (bot, message, args) => {
	let botEmbed = new Discord.RichEmbed()
  .setColor('#dff9fb')
  .setDescription("🔗 **My Invite:** https://discordapp.com/oauth2/authorize?client_id=603604735424987160&permissions=8&scope=bot\n\n🏙 **My Server:** https://discord.gg/UrEpuZR");
	message.channel.send(botEmbed)
}
	      
module.exports.help = {
  name: "invite"
}
