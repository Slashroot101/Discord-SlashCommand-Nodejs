const {Client, Intents, Collection} = require('discord.js');
const {discordToken} = require('./config');
const {initializeCommands} = require('./deploy-commands');
const client = new Client({intents: [Intents.FLAGS.GUILDS]});
const fs = require('fs');
const path = require('path');

(async () => {
    await initializeCommands();

    client.once('ready', async () => {
        console.log('Ready!');
    });

    client.on('interactionCreate', async interaction => {
        if(!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if(!command) return;

        try {
            await command.execute(interaction, client);
        } catch(error) {
            await interaction.reply({ content: 'There was an error while executing your command!'})
        }
    });

    client.commands = new Collection();
    const commandFiles = fs.readdirSync(path.resolve(__dirname, './commands')).filter(x => x.endsWith('.js'));

    for(const file of commandFiles){
        const command = require(path.resolve(__dirname, `./commands/${file}`));
        client.commands.set(command.data.name, command);
    }

    client.login(discordToken);
})();
