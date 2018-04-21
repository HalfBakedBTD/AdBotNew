const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let botEmbed = new Discord.RichEmbed()
  .setColor('#fff200')
  .setDescription("AdBot was made by <@284137818895417344> to help small servers grow. What is the best way to get noticed other than ads? Answer: there is none. We strive to get your server noticed!\n\nQnA:\nWhat do I do? Simply type `^commands` to pull up a list of commands!\nCan I get support? Yea! We have staff waiting on our [server](https://discord.gg/REkAA2X) to help you!\nCan I [donate](https://www.patreon.com/halfbakedpatreon)? Sure! All donations are a blessing!");
  message.channel.send(botEmbed)
}
	      
module.exports.help = {
  name: "help"
}
