const logger = require('../logger');

module.exports = async (interaction, user) => {
    try {
        const command = interaction.client.commands.get(interaction.commandName);

        await command.execute(interaction, user);
    } catch (err) {
        logger.err(err, 'An error occured executing a command');
    }
};