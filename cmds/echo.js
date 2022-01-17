export default async ({message, args}) => {
    console.log(message.author)
    message.delete();
    message.channel.send(args.join(" "));
    message.author.send("test")
}