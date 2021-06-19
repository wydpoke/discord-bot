module.exports.run = async (bot, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_NICKNAMES') || !msg.member.hasPermission('CHANGE_NICKNAME'))
    return;

    msg.member.setNickname(args[0], `${args[1] || "No reason specified"}`)
        .catch(e => {
            msg.channel.send(`\`Error:\` \`\`\`js\n${e}\n\`\`\``)
        });
}

module.exports.help = {
    name: "nickname",
    aliases: ["nick"]
}