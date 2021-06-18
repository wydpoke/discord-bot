module.exports.run = async (bot, msg, args) => {
    let target = msg.mentions.members.first() ||  args[0]

    try {
        let role = msg.guild.roles.cache.find(r => r.name === args.join(' '))
        if(!role) return msg.channel.send('Role doesn\'t exist')

        console.log(args.join(' '))
        
        target.roles.remove(role)
        await msg.channel.send(`Removed ${role} from ${target}`)
    } catch(e) {
        msg.channel.send(`\`Error:\` \`\`\`js\n${e}\n\`\`\``)
    }
}   

module.exports.help = {
    name: "removerole",
    aliases: ["roleremove"]
}