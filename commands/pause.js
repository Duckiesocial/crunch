module.exports.run = async (bot, message, args, ops) => {

    // Gegevens ophalen.
    var guildIDData = ops.active.get(message.guild.id);

    // Nakijken als er al een liedje aan het afspelen is.
    if (!guildIDData) return message.channel.send("There are not playing any Music now.");

    // Nakijken als de gebruiker in het kanaal zit van de bot.
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry you are not connected with the Bot");

    // Nakijken als het liedje al gepauzeerd is.
    if (guildIDData.dispatcher.paused) return message.channel.send("The music is already Pause");

    // Pauzeer het liedje.
    guildIDData.dispatcher.pause();

    // Stuur bericht.
    message.channel.send(`Paused ${guildIDData.queue[0].songTitle}.`);

}

module.exports.help = {
    name: "pause",
    description: "Zet de muziek op pauze"
}