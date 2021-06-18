const { MessageEmbed } = require("discord.js");

const fetch = module.require('node-fetch')

module.exports.run = async (bot, msg, args) => {
    let message = msg.channel.send("Generating a dog..")
                    .then(m => m.delete({timeout: 500}))

    const api = await fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(body => body.message)

    try {
        let embed = new MessageEmbed
            embed.setImage(api)
            embed.setColor('RANDOM')

        msg.channel.send(embed);
    } catch (err) {
        msg.channel.send(`\`Error:\` \`\`\`js\n${err}\n\`\`\``)
    }
}

module.exports.help = {
    name: "dog",
    aliases: ["randomdog"]
}