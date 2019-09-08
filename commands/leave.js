module.exports.run = async (bot, message, args) => {

    if (!message.member.voiceChannel) return message.channel.send("Please Connect with a Voice Channel");

    if (!message.guild.me.voiceChannel) return message.channel.send("Sorry de bot is not connected with a voice channel")

        if (!message.member.voiceChannel) return message.channel.send("Please Connect with a Voice Channel");
    
        if (!message.guild.me.voiceChannel) return message.channel.send("Sorry de bot is niet met een spraak kanaal verbonden.");
    
        if (message.guild.me.voiceChannelID != message.member.voiceChannelID) return message.channel.send("Sorry you are not connected in teh Same Voice channel like the bot.");
    
        message.guild.me.voiceChannel.leave();
    
        message.channel.send("Leaving Channel...");   
    }

module.exports.help = {
    name: "leave",
    description: "Laat de bot leaven van het kanaal."
}