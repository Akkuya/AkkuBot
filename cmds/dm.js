export default ({ client, args}) => {
    client.users.cache.get(args.shift())
        .send(args.join(' '));
}