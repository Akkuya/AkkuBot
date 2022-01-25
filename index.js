import { Client, Intents, MessageEmbed, MessageReaction, WelcomeChannel}  from 'discord.js';
import secrets from './secrets.json' assert { type: 'json' };
 
import * as commands from './cmds/index.js';

const myIntents = new Intents();
myIntents.add(
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES
);


const client = new Client({ intents: myIntents });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('messageCreate', message => {
    
    if(!message.content.startsWith(secrets.prefix.toLowerCase())) {  return }

    let commandBody = message.content.slice(secrets.prefix.length);
    let args = commandBody.split(" ")
    let cmd = args.shift().toLowerCase();
    console.log(`\nCommand Body:  ${commandBody},\nArgs: ${args},\nCommand: ${cmd},\nAuthor: ${message.author.tag}`)


    Object.keys(commands).forEach(mapcmd => { //literally witchcraft 
        if (cmd === mapcmd) {                 //how does this work
            commands[mapcmd]({
                client, message, args
            })
            
        }
    })
    
})


client.on('guildMemberAdd', (member) => {
    const WelcomeEmbed = new MessageEmbed()
        .setColor('#000000')
        .setTitle(`Welcome ${member.user.tag}!`)
        .setImage(member.user.avatarURL())
        .setTimestamp()
    client.channels.fetch(commands.dm.welcomeChannel)
    .then(channel => channel.send({ embeds: [WelcomeEmbed] }))
})

client.on('guildMemberRemove', (member) => {
    client.channels.fetch('930536238153343026')
    .then(channel => channel.send(`Bye ${member.user.tag}...`))
})



client.login(secrets.token);