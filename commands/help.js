const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let botEmbed = new Discord.RichEmbed()
  .setColor('#fff200')
  .setDescription("All Commands:\n:question: **^help** - Shows list of commands in the channel the command is sent in.\n:grey_question: **^dmhelp** - DMs you a list of my commands.\n:closed_book: **^test** - Helps you set up your server.\n:open_file_folder: **^create** - Automaticly sets up your server for you.\n\n:hammer: **^ban** - Bans a member in the server.\n:boot: **^kick** - Kicks a member in the server.\n:recycle: **^recycle** - Clears messages. Equivilent to \`purge\` or \`clear\` on other bots.\n:cloud: **^purge-check** - Checks and tells you how many people will be pruned.\n:thunder_cloud_rain: **^purge** - Prunes members who have been inactive for a week.\n⚠ **^warn** - Warns a member in the server.\n\n:arrow_heading_up: **^ad** - Bumps your server to the top of the advertising slot.\n🐦 **^youtube** - advertises youtube channels based on channel IDs.\n💜 **^twitch** - advertises twitch channels based on links.\n:stuck_out_tongue_winking_eye: **^emoji** - Adds the AdBot emoji to your server.\n:gear: **^genres** - Displays all current genres the bot has.\n:mailbox: **^info** - Gives various info about AdBot.\n\n:e_mail: **^invite** - Sends you and invite to add AdBot to your server.\n:pizza: **^server** - Links you to AdBot's official server.\n\n\`WARNING\` any NSFW or server spam names will result in ban from using the bot. The ban will include no access to all bot features to ensure no further rule breaking.\n\n[Invite](https://discordapp.com/oauth2/authorize?client_id=421744026740457474&permissions=8&scope=bot) | [Discord](https://discord.gg/REkAA2X) | [Donate](https://www.patreon.com/halfbakedpatreon)");
	message.channel.send(botEmbed)
}
	      
module.exports.help = {
  name: "commands"
}
