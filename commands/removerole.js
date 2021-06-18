module.exports.run = async (bot, msg, args) => {
    let target = msg.mentions.members.first() || args[0]
    let arg = msg.content.split(" ")

    try {
        let role = msg.guild.roles.cache.find(r => r.name.toLowerCase() === arg[2])
        if(!role) return msg.channel.send('Role doesn\'t exist')
        
        await target.roles.remove(role)
        msg.channel.send(`Removed ${role} from ${target}`)
    } catch(e) {
        msg.channel.send(`\`Error:\` \`\`\`js\n${e}\n\`\`\``)
    }
}   

module.exports.help = {
    name: "removerole",
    aliases: ["roleremove"]
}