const ytdl = require('discord.js');
 
module.exports.run = async (bot, message, args, ops) => {
 
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("U cant use this Command.");
    if(!args[0]) return message.channel.send("OOF");
    message.channel.bulkDelete(args[0]).then(() => {
        console.log(`Verwijderd ${args[0]} berichten.`).then(msg => msg.delete(5000));
    });
  
}
 
module.exports.help = {
    name: "purge",
    description: ""
}