const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== '284137818895417344') {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("NO! ADMIN ONLY! OMG!");
  }
      message.guild.pruneMembers(7, true)
      .then(pruned => {
        let pruneEmbed = new Discord.RichEmbed()
        .setColor('#27ae60')
        .setDescription(`I have just scanned ${message.guild.memberCount} and found ${pruned} inactive people who have not checked in for 7 days. These ${pruned} people will be kicked with the next use of \`^purge\`.`);
        message.channel.send(pruneEmbed)
      .catch(console.error);
      });
}

module.exports.help = {
  name: "purge-check"
}
