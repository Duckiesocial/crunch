const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    var text = args.join(" ");
        if (!text) return message.channel.send("What must I say??");
        message.channel.send(text);

        message.delete();

}

module.exports.help = {
    name: "say"
}