const checkForUpdates = require("../../modules/updateModule");

module.exports = {
    name: '!checkforupdates',
    category: 'system',
    description: 'Check if the bot has an update',
    params: false,
    tags: ['moderator', 'broadcaster'],
    execute(client) {
        checkForUpdates(client);
    }
};