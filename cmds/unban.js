import { Permissions } from "discord.js"
export default async ({client, message, args}) => {
    if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) { message.reply(`You does not have permission to kick that member.`); return }
    
    
    const userID = args.shift();
        
    const unbannedUser = await client.users.fetch(userID)
        .catch(() => null);

    if (!unbannedUser) return message.channel.send("User not found");

    message.guild.bans.remove(userID)
        .then(user => message.reply(`Unbanned ${user.username} from ${message.guild.name}`))
        .catch(console.error);
    
}