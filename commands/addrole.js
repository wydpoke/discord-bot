module.exports.run = async (bot, msg, args) => {
    let target = msg.mentions.members.first() ||  args[0]

    try {
        let role = msg.guild.roles.cache.find(r => r.name === args[1])
        if(!role) return msg.channel.send('Couldn\'t find that role..')
        if(target.roles.cache.has(role.id)) return msg.channel.send('Target already has that role.')

        target.roles.add(role)
        await msg.channel.send(`Successfully added ${role} to ${target}`)
    } catch(e) {
        msg.channel.send(`\`Error:\` \`\`\`js\n${e}\n\`\`\``)
    }
}   

module.exports.help = {
    name: "addrole",
    aliases: ["roleadd"]
}