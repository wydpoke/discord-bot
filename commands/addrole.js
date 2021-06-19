module.exports.run = async (bot, msg, args) => {
    let target = msg.mentions.members.first() || args[0]
    
    args.shift()

    try {
        let roleName = args.join(' ') || msg.guild.roles.find(r => r.name === args.join(' '))
        let role = msg.guild.roles.cache.find((role) => {
            return role.name.toLowerCase() === roleName.toLowerCase()
        });

        if(!role) { 
            msg.channel.send('Couldn\'t find that role')
                .then(m => m.delete({timeout:3000}))                 
        }

        await target.roles.add(role)
        msg.channel.send(`Added ${role} to ${target}`)
            .then(m => m.delete({timeout: 3000}))
    } catch(e) {
        msg.channel.send(`\`Error:\` \`\`\`js\n${e}\n\`\`\``)
    }
}   

module.exports.help = {
    name: "addrole",
    aliases: ["roleadd"]
}