import { GuildMember, Permissions } from "discord.js"

export default async ({ client, message, args }) => {
    console.log(message.member.permissions)
    console.log(client.users.fetch(args[0]).user)
    message.reply('Pong!');
}