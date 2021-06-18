const { MessageEmbed } = require("discord.js");

const fetch = module.require('node-fetch')

module.exports.run = async (bot, msg, args) => {
    let message = msg.channel.send("Generating cat...")
                    .then(m => m.delete({timeout: 500}))
    
    const api = await fetch('http://aws.random.cat/meow')
        .then(response => response.json())
        .then(body => body.file);

    try {
        let embed = new MessageEmbed()
            embed.setImage(api)
            embed.setColor('RANDOM')

        msg.channel.send(embed);
    } catch (e) {
        msg.channel.send(`\`Error:\` \`\`\`js\n${e}\n\`\`\``)
    }
}

module.exports.help = {
    name: "cat",
    aliases: ["randomcat"]
}