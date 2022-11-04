const {readdirSync} = require('fs');
const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
const {discordClientId, discordToken, shouldCreateCommands} = require('../../config');
const path = require('path');
const logger = require('../../logger');

module.exports = async () => {
    const commands = [];
    const commandFiles = readdirSync(path.resolve(process.cwd(), './src/libs/interactions')).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        logger.info(`Loading interaction ./src/libs/interactions/${file}`)
        const command = require(`../${file}`);
        commands.push(command);
    }

    logger.info(`Finished loading interactions`);

    if(shouldCreateCommands){
        logger.info('Registering interactions with Discord');
        const rest = new REST({ version: '9' }).setToken(discordToken);
        await rest.put(Routes.applicationCommands(discordClientId), { body: commands.map(x => x.data) })
        logger.info('Succesfully created slash interactions with Discord');
    }


    return commands;
}