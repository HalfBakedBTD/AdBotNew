const Discord = require("discord.js");
const ad = require("../adsave.json");

const aTime = 1440;
const activatedU = new Set();

function adSend(bot, message) {
	 message.channel.createInvite()
    .then(invite => {
   		let adEmbed = new Discord.RichEmbed()
   		.setColor('#27ae60')
   		.setTitle(`${message.guild.name}:`)
   		.setDescription(`${ad[message.guild.id].desc}\n**------------------------------------------------**\n**Invite:** https://discordapp.com/oauth2/authorize?client_id=462783160128765952&permissions=8&scope=bot\n**USER ID:** \`${message.author.id}\`\n**Join: https://discord.gg/${invite.code}**`);
   		bot.channels.filter(c => c.name === 'ads').forEach(channel => {
			if (channel.type == 'text') {
				channel.send(adEmbed);
			}
		});
	 });
 setTimeout(() => adSend(bot, message), 30*60000);
}

exports.run = async (bot, message, args) => {
	if (activatedU.has(message.author.id + message.guild.id)) return message.reply("you have already activated ads!");
  let adschannel = message.guild.channels.find(`name`, "ads");
  if(!adschannel) return message.channel.send("The bot is not properly set up for this command! Please type `^test`.");
	if (message.author.id !== '346687165868015616') {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
	}
  if(!ad[message.guild.id]) return message.channel.send("Please use the command `^scan` to create your server file!");
  
  if (ad[message.guild.id].desc = '') {
	ad[message.guild.id].desc = "Description not set for this server."
    message.channel.send = "❌ You have not provided a description yet! To set one use `^description` or `^desc` commands. (`OPTIONAL`)"
  }
  
  message.channel.createInvite()
    .then(invite => {
	    ad[message.guild.id].link = `https://discord.gg/${invite.code}`
    });
  
  let botEmbed = new Discord.RichEmbed()
  .setColor('#27ae60')
  .setTitle('✅ ACTIVATED ✅')
  .setDescription(`Ads for ${message.guild.name} have been activated!\n\n**__Description:__**\n${ad[message.guild.id].desc}`);
  message.channel.send(botEmbed)
	
	adSend(bot, message)
	
	activatedU.add(message.author.id + message.guild.id);
    setTimeout(() => {
      activatedU.delete(message.author.id + message.guild.id);
    }, aTime * 60000);
}
	      
module.exports.help = {
  name: "activate"
}
