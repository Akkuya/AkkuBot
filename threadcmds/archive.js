import { Permissions, ThreadChannel } from "discord.js";

export default ({  message  }) => {
    if (!message.channel.isThread()) {message.reply("Channel is not a thread."); return}
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_THREADS)) { message.reply(`You does not have permission to kick that member.`); return }
    
    message.channel.setArchived()
}