const Discord = require("discord.js");
const ad = require("../adsave.json");

function adSend(bot, message) {
   bot.channels.filter(c => c.name === 'ads').forEach(channel => channel.send(adEmbed));
 setTimeout(() => adSend(bot, message), 30*60000);
}

exports.run = async (bot, message, args) => {
  let adschannel = message.guild.channels.find(`name`, "ads");
  if(!adschannel) return message.channel.send("The bot is not properly set up for this command! Please type `^test`.");
	if (message.author.id !== '346687165868015616') {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
	}
  if(!ad[message.guild.id]) {
    ad[message.guild.id] = {
      link: "",
      desc: ""
    }
  }
  
  let check === `${ad[message.guild.id].desc}`;
  
  if (ad[message.guild.id].desc = "") {
    check = "❌ You have not provided a descrtiption yet! You can update the description using `^description` or `^desc` command. When you update the description, I will start posting your server with the description."
  }
  
  message.channel.createInvite()
    .then(invite => {
	    ad[message.guild.id].link = "https://discord.gg/${invite.code}"
    });
  
  let botEmbed = new Discord.RichEmbed()
  .setColor('#27ae60')
  .setTitle('✅ ACTIVATED ✅')
  .setDescription(`Ads for ${message.guild.name} have been activated!\n\n**__Description:__**\n${check}`);
  message.channel.send(botEmbed)
}
	      
module.exports.help = {
  name: "activate"
}