module.exports.run = async (bot, msg, args) => {
    let target = msg.mentions.members.first() || args[0]
    
    args.shift()

    try {
        let roleName = args.join(' ') || msg.guild.roles.find(r => r.name === args.join(' '))
        let role = msg.guild.roles.cache.find((role) => {
            return role.name.toLowerCase() === roleName.toLowerCase()
        });

        if(!role) { 
            msg.channel.send('Role doesn\'t exist') 
                .then(m => m.delete({timeout:3000}))
        }

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