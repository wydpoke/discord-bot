/*---------------------------------------------------------------------------
	Modules
---------------------------------------------------------------------------*/
const Discord = require("discord.js"),
      fs = require("fs"),
      config = require("./config.json")//,
    //con = require("./db/sql.js")

/*---------------------------------------------------------------------------
 Command loader
---------------------------------------------------------------------------*/
let files = fs.readdirSync("./commands/"),
     cmds = new Map();

files.forEach(f => {
    let props = require(`./commands/${f}`)
    cmds.set(props.help.name, props)

    if(props.help.aliases) {
        props.help.aliases.forEach(a => cmds.set(a, props));
    }

});


/*---------------------------------------------------------------------------
	Client
---------------------------------------------------------------------------*/
const bot = new Discord.Client({disableEveryone: true});


/*---------------------------------------------------------------------------
	Ready event
---------------------------------------------------------------------------*/
bot.on("ready", () => {
    console.log(`Ready. Logged in as ${bot.user.tag}`)
});

bot.on("message", async (msg) => {
    if(!msg.content.startsWith(config.bot.prefix)) return;
  	if(msg.author.bot || msg.system) return;
  	if(msg.channel.type.toLowerCase() === "dm") return;

  	if(!msg.guild.me.permissionsIn(msg.channel).has(["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"])) return;

/*---------------------------------------------------------------------------
	Command handler
---------------------------------------------------------------------------*/
  	let split = msg.content.split(/ +/g);
  	let name = split[0].slice(config.bot.prefix.length).toLowerCase();
  	let args = split.slice(1);

  	let cmd = cmds.get(name);
  	if(cmd) cmd.run(bot, msg, args);
});

/*---------------------------------------------------------------------------
  Login
---------------------------------------------------------------------------*/
bot.login(config.bot.token);

/*---------------------------------------------------------------------------
  Unhandled rejections
---------------------------------------------------------------------------*/
process.on('unhandledRejection', console.error);
