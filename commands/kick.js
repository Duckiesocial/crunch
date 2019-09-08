const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


        // !kick @Thibaut redenen hier.

        var kickUser = message.guild.member(message.mentions.users.first());

        if (!kickUser) return message.channel.send("Gebruiker is niet gevonden");

        var reason = args.join(" ").slice(22);

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je hebt hier geen permissies voor!");

        if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker kan je niet kicken.");

        var kick = new discord.RichEmbed()
            .addField("Speler", kickUser)
            .addField("Is Gekicked met reden", reason)
            
            message.guild.member(kickUser).kick(reason);

        message.reply(kick);


    }

module.exports.help = {
name: "kick"

}