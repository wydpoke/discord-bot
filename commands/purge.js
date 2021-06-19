module.exports.run = async (bot, msg, args) => {
    if(!msg.member.hasPermission("MANAGE_MESSAGES")) 
    return;

    await msg.delete();

    let purgeAmount = args[0]
    let purgeLimit = Number(purgeAmount);

    msg.channel.messages.fetch({limit: purgeLimit})
        .then(messages => {
            msg.channel.bulkDelete(messages);
            msg.channel.send(`Deleted **${messages.array().length}** messages`)
                .then(m => m.delete({timeout: 2000}));
    });
}

module.exports.help = {
    name: "purge",
    aliases: ["extinction"]
}