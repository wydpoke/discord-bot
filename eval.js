module.exports.run = async (bot, msg, args, config) => {
    if(msg.author.id !== config.owner.ownerID) return;

    try {
      function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
          return text;
      }

      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

       msg.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
       msg.channel.send(`\`Error\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}

module.exports.help = {
    name: "eval",
    aliases: ["test", "math"]
}
