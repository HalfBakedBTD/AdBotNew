module.exports.run = async (bot, message, args) => {
    let users = bot.guilds;
	
		let number = 1;

    let searchTerm = args[0];
    if(!searchTerm) return message.channel.send("Please type a guild to search for!\n\nExample: `^search Fire` will find and send servers with Fire in thier name.");
    
    message.channel.send(`I am finding and direct messaging you the top 3 servers with ${searchTerm} in thier name.`)
    
    bot.guilds.filter(g => g.id !== 'sgkmsrjgnrkkskf').forEach(guild => {
			if (number !== 4) {
	    	if (guild.name.toLowerCase().includes(`${searchTerm}`)) {
					  number = number + 1
        		message.channel.createInvite()
      				.then(invite => {
        				message.author.send(`**${guild.name}: https://discord.gg/${invite.code}**`);
	  			});
	    	}
			}
    });
	  if (number > 1) {
			message.channel.send(`I have found ${number} servers with ${searchTerm} in thier name!`)
		} else {
			message.channel.send(`I have found no servers with ${searchTerm} in thier name.`)
		}
}
    
module.exports.help = {
    name: "search"
}
