
export const getUserFromMention = (mention, client) => {
    if (!mention) return
    if (Array.isArray(mention)) mention = mention.join('')
  
    const matches = mention.match(/<@(?:!?|&?)(\d+)>/i)
    if (matches) mention = matches[1]
    return client.users.cache.get(mention)
}