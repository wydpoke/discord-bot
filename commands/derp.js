module.exports.run = async (bot, msg, args) => {
    //!derp i like cats
    //output i LIkE caTS
    let text = args.join(' ')

    const randified = text.split('')
        .map(char => Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase())
        .join('')
    
    msg.channel.send(randified);
}

module.exports.help = {
    name: 'derp',
    aliases: ["silly", "randomize"]
}