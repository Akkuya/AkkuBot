import { Permissions } from "discord.js"
export default async ({client, message, args}) => {
    if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) { message.reply(`You does not have permission to ban that member.`); return }
    
    
    
    const userID = args.shift();
    const noReason = "No reason given";
        
    const bannedUser = await client.users.fetch(userID)
        .catch(() => null);
    if (!bannedUser) return message.channel.send("User not found");

    await bannedUser.send(`You were banned from ${message.guild.name} for ${args.join(" ") ?? noReason}.`)
        .catch(() => {
            message.channel.send("User has DMs closed or has no mutual servers with the bot:(");
        });
    const usertag = bannedUser.tag
        
    message.guild.members.ban(userID)
        .then(banInfo => message.reply(`Banned ${usertag}.`))
        .catch(console.error);

    
} 