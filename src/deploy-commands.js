const {REST} = require('@discordjs/rest');
const fs = require('fs');
const path = require('path');
const {discordToken, clientId} =  require('./config');
const {Routes} = require('discord-api-types/v9');
console.log(discordToken, clientId);
exports.initializeCommands = async () => {
    const commands = [];
    const commandsFiles = fs.readdirSync(path.resolve(__dirname, './commands')).filter(x => x.endsWith('.js'));

    for(const file of commandsFiles){
        const command = require(`./commands/${file}`)
        commands.push(command.data.toJSON());
    }

    const rest = new REST({version: '9'}).setToken(discordToken);
    await rest.put(Routes.applicationCommands(clientId), {body: commands});
};