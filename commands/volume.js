module.exports.run = async (bot, message, args, ops) => {

    // Gegevens ophalen.
    var guildIDData = ops.active.get(message.guild.id);

    // Nakijken als er al een liedje aan het afspelen is.
    if (!guildIDData) return message.channel.send("There are not playing any Music");

    // Nakijken als de gebruiker in het kanaal zit van de bot.
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry you are not connected with the Bot");

    // Nakijken wat de user meegeeft van volume. Als het te hoog wordt is de kwaliteit veel slechter.
    if (isNaN(args[0]) || args[0] > 150 || args[0] < 0) return message.channel.send("Give a number between 1 - 150.");

    // Het volume aanpassen.
    guildIDData.dispatcher.setVolume(args[0] / 100);

    // Bericht sturen.
    message.channel.send(`Volume changed Of  ${guildIDData.queue[0].songTitle} to ${args[0]}`);

}

module.exports.help = {
    name: "volume",
    description: "Verander het volume van de bot"
}