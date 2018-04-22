const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let logschannel = message.guild.channels.find('name', 'logs');
		if (message.author.id !== '284137818895417344') {
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No. Why would I recycle for you?\n`#RecyclingSavesTheEarth`");
		}
  	if(!args[0]) return message.channel.send(`:page_facing_up: **Info** - This command is used to clear messages.\n\n:dividers: Use - \`^recycle <number of messages to purge>\`\n\n:ice_cream: Example - \`^recycle 8\``);
  	message.channel.bulkDelete(args[0]).then(() => {
			message.channel.send(`**__Cleared ${args[0]} messages.__**`).then(msg => msg.delete(8000));
		});
		if (!logschannel) return message.channel.send('If you create a `#logs` channel I can record your moderation data!')
		logschannel.send(`:recycle: **__Messages Recycled__** :recycle:\n\n:person_with_blond_hair: **User:** <@${message.author.id}>\n\n:hash: **Channel:** <#${message.channel.id}>\n\n:fire: **Amount:** ${args[0]}`)
}

module.exports.help = {
  name: "recycle"
}
