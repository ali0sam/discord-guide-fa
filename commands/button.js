const { MessageActionRow, MessageButton } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('dokme ha'),
	async execute(interaction) {
        // button
		const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('primary')
                .setLabel('test')
                .setStyle('PRIMARY')
                .setEmoji('🎉'),
                );
// collector
const filter = i => i.customId === 'primary' && i.user.id === interaction.user.id;

const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

collector.on('collect', async i => {
    if (i.customId === 'primary') {
        await i.update({ content: 'dokme click shod!', components: [] });
    }
});

collector.on('end', collected => console.log(`Collected ${collected.size} items`));


        // send message and button
		return interaction.reply({content: 'tada!', components: [row]});
	},
};