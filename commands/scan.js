const Discord = require("discord.js");
const ad = require("../adsave.json");

exports.run = async (bot, message, args) => {
	if (message.author.id !== '346687165868015616') {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Please use `^scan` in a server you own or are administrator in.");
	}
	if(!ad[message.guild.id]) {
    ad[message.guild.id] = {
      link: "",
      desc: "",
      time: 60
    }
  }
  //return message.channel.send("Comming Soon!");
	bot.guild.filter(g => g.id === '486237974694985771').forEach(guild => {
		try {
			let check = guild.members.filter(m => m.id === message.author.id);
		} catch (err) {
			console.log(err)
			return;
		}
		if (!check) {
			return message.channel.send("The ad cooldown for this server is 60 minutes. To change the cooldown to 30 minutes, join **AdBot Home:** https://discord.gg/UrEpuZR.");
		} else {
			ad[message.guild.id].time = 30
			return message.channel.send("The ad cooldown for this server is 30 minutes. Thank you for being a member of **AdBot Home**!");
		}
	});
}
	      
module.exports.help = {
  name: "scan"
}
