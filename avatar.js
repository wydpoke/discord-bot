const {MessageEmbed} = require("discord.js");

module.exports.run = async (bot, msg, args) => {
    let target = msg.mentions.users.first() || msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || msg.author;

    try {
      let embed = new MessageEmbed()
        embed.setTitle(`${target.tag}'s avatar`)
        embed.setImage(target.displayAvatarURL())
        embed.setColor('RANDOM')

      msg.channel.send(embed);
    } catch(e) {
      msg.channel.send(`\`Error:\` \`\`\`js\n${e}\n\`\`\``)
    }
}

module.exports.help = {
    name: "avatar",
    aliases: ["picture", "profilepicture"]
}
