const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
                        .setName('purge')
                        .setDescription('Purges the last X number of messages. Cannot delete any messages older than 14 days.')
                        .addNumberOption(opt => opt.setName('nummessages').setDescription('Number of messages to delete').setRequired(true)),
    async execute(interaction, user) {
        const numMessages = interaction.options.get('nummessages').value;

        if(numMessages > 100) {
            return await interaction.reply('You cannot delete more than 100 messages at once due to Discord limitations');
        }

        await interaction.channel.bulkDelete(numMessages);
        await interaction.reply('Messages deleted');
    }
}