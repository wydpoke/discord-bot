module.exports.run = async (bot, msg, args) => {
  	if(!msg.guild.iconURL) return msg.edit("No icon.");

    try {
  	  let msg = await msg.channel.send("Generating avatar...");

      await msg.channel.send({files: [
        {
          attachment: msg.guild.iconURL,
          name: "icon.png"
        }
      ]});

      msg.delete();
    } catch(e) {
      msg.channel.send(`\`Error:\` \`\`\`js\n${e}\n\`\`\``)
    }
}

module.exports.help = {
    name: "icon",
    aliases: ["guildicon", "guildpicture"]
}
