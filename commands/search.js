module.exports.run = async (bot, message, args) => {
    let users = bot.guilds;

    let searchTerm = args[0];
    if(!searchTerm) return message.channel.send("Please type a guild to search for!\n\nExample: `^search Fire Hut` will find and send servers with Fire Hut in thier name.");

    let matches = users.filter(g => g.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    message.channel.send(`I am finding and messaging you servers with ${searchTerm} in thier name.`)
    
    message.author.send(matches.map(u => u.tag));

}
    
module.exports.help = {
    name: "search"
}
