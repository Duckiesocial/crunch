module.exports.run = async (bot, message, args, ops) => {

    // Gegevens ophalen.
    var guildIDData = ops.active.get(message.guild.id);

    // Nakijken als er al een liedje aan het afspelen is.
    if (!guildIDData) return message.channel.send("There are not are any Songs Playing now");

    // Nakijken als de gebruiker in het kanaal zit van de bot.
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry you are not Connected with the Bot");

    // Nakijken als het liedje niet gepauzeerd is.
    if (!guildIDData.dispatcher.paused) return message.channel.send("The music is Not Paused");

    // start het liedje terug.
    guildIDData.dispatcher.resume();

    // Stuur bericht.
    message.channel.send(`Started ${guildIDData.queue[0].songTitle}.`);

}

module.exports.help = {
    name: "resume",
    description: "Zet de muziek terug aan"
}