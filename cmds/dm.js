export default ({ client, message, args}) => {
    client.users.cache.get(args.shift())
        .send(args.join(' '));
}