const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var text_channels = 0, voice_channels = 0, total_channels = 0;
    bot.channels.filter(c => c.id !== "Frog Turd").forEach(channel => {
      if (channel.type == 'text') {
        text_channels += 1;
        total_channels += 1;
      } else if (channel.type == 'voice') {
        voice_channels += 1;
        total_channels += 1;
      }
    });
    
    //message.reply(`here is the server information \n\n📟 Server Name: ${message.guild.name}\n\n👑 Owner: ${message.guild.owner}\n\n💳 Owner ID: ${message.guild.ownerID}\n\n🌐 Region: ${message.guild.region}\n\n🚦 Verification Level: ${message.guild.verificationLevel}\n\nTotal Members: ${message.guild.memberCount}`);
    
    let guildEmbed = new Discord.RichEmbed()
    .setTitle("Server Information.")
    .setColor('#27ae60')
    .addField("Creator:", `<@487707042224799757>`, true)
    .addField("Creator ID:", `487707042224799757`, true)
    .addField("Creator Tag:", `HalfBakedGaming#6331`, true)
    .addField("Text Channels:", `${text_channels}`, true)
    .addField("Voice Channels:", `${voice_channels}`, true)
    .addField("Total Channels:", `${total_channels}`, true)
    .addField("Servers:", `${bot.guilds.size}`, true)
    .addField("Users:", `${bot.users.size}`, true)
    .addField("Version:", `1.0 Revived`, true);
    
    message.channel.send(guildEmbed)
}

module.exports.help = {
  name: "stats"
}
