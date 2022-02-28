export default async ({ client, message, args }) => {
    const recipent = await client.users.fetch(args.shift())
        .catch(() => {
            message.reply('User not found.');
            return;
        })


    await recipent.send(`${message.author.tag} sent ${args.join(' ')}`)
        .catch(() => { 
            message.reply('Recipient has DM\'s closed or no mutual servers with the bot.')
        })
        
}