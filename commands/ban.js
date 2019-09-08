const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


        // !kick @Thibaut redenen hier.

        var banUser = message.guild.member(message.mentions.users.first());

        if (!banUser) return message.channel.send("Gebruiker is niet gevonden");

        var reason = args.join(" ").slice(22);

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je hebt hier geen permissies voor!");

        if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker kan je niet bannen.");

        var ban = new discord.RichEmbed()
            .addField("Speler", banUser)
            .addField("Is Gebanned met reden", reason);
            
            message.guild.member(banUser).ban(reason);

        message.reply(ban);


    }

module.exports.help = {
name: "ban"

}