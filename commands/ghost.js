module.exports.run = async (bot, msg, args) => {
    await msg.delete();

    msg.channel.send("**Poof!**")
        .then(msg => msg.delete({timeout: 1000}))
}

module.exports.help = {
    name: "ghost",
    aliases: ["phantom", "poof"]
}