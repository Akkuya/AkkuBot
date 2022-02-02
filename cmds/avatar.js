import { MessageEmbed } from "discord.js"

export default async ({ client, message, args }) => {
    if (!args[0]) {
        const selfAvEmbed = new MessageEmbed()
            .setColor('#000000')
            .setTitle(`Avatar for ${message.author.tag}`)
            .setImage(message.author.avatarURL())
        message.reply({embeds: [selfAvEmbed]})
        return
    }
    const usertofetch = await client.users.fetch(args.shift()).catch(()=>null)
    
    if (!usertofetch) {message.reply("No user found!")}
    const useravatar = usertofetch.avatarURL()
    const AvEmbed = new MessageEmbed()
        .setColor('#000000')
        .setTitle(`Avatar for ${usertofetch.tag}`)
        .setImage(useravatar)
    message.reply({embeds: [AvEmbed] } )
} 