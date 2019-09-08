const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    // !verwijder 800000

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij kan deze command niet Gebruiken");

    if (!args[0]) return message.reply("Geef een aantal op.");

    if(Number.isInteger(parseInt(args[0]))){

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            message.channel.send(`Ik heb ${args[0]} berichten verwijderd.`).then(msg => msg.delete(10000));
         });

    } else {
        return message.channel.send("Geef een getal op.");
    }

}

module.exports.help = {
    name: "verwijder"
}