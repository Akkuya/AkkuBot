import { Permissions, ThreadChannel } from "discord.js";

export default ({  message, thread }) => {
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_THREADS)) { message.reply(`You does not have permission to kick that member.`); return }
    
    message.channel
}