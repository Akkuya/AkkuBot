import { GuildMember, Permissions } from "discord.js"
export default async ({client, message, args}) => {
    if (!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) { message.reply(`You does not have permission to kick that member.`); return }
    
    
    
    const userID = args.shift();
    const noReason = "No reason given";
    
    
    const kickedUser = await client.users.fetch(userID)
        .catch(() => null);

    if (!kickedUser) return message.channel.send("User not found");

    await kickedUser.send(`You were kicked from ${message.guild.name} for ${args.join(" ") ?? noReason}.`)
        .catch(() => {
            message.channel.send("User has DMs closed or has no mutual servers with the bot:(");
        });
        
    message.guild.members.kick(userID)
        .then(banInfo => message.reply(`Kicked ${banInfo.username}#${banInfo.discriminator}.`))
        .catch(console.error);

    
} 