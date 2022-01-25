import { MessageEmbed } from "discord.js"

export default async ({ client, message, args }) => {
    const usertofetch = await client.users.fetch(args.shift()).catch(()=>null)
    if (!usertofetch) {message.reply("No user found!"); return}
    const useravatar = usertofetch.avatarURL()
    
    const AvEmbed = new MessageEmbed()
        .setColor('#000000')
        .setTitle(`Avatar for @{usertofetch}`)
        .setImage(useravatar)
        

    message.reply(useravatar)



}