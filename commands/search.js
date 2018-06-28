module.exports.run = async (bot, message, args) => {
    let users = bot.guilds;

    let searchTerm = args[0];
    if(!searchTerm) return message.channel.send("Please type a guild to search for!\n\nExample: `^search Fire` will find and send servers with Fire in thier name.");
    
    message.channel.send(`I am finding and direct messaging you servers with ${searchTerm} in thier name.`)
    
    bot.guilds.filter(g => g.name.includes(`${searchTerm}`)).forEach(guild => {
        message.channel.createInvite()
      .then(invite => {
        message.author.send(`**${guild.name}: https://discord.gg/${invite.code}**`);
	  });
    });
}
    
module.exports.help = {
    name: "search"
}
