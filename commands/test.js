const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    console.log("ALARM ALARM BOT VERWIJDERD")
    message.channel.send("Succesvol bot Verwijderd!")

}

module.exports.help = {
    name: "test"
}