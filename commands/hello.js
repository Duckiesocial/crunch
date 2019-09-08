const discord = require("discord.js")



module.exports.run = async (bot, message, args) => {

    message.reply(`Hello ${message.author}`);

}


module.exports.help = {
    name: "hello"
}