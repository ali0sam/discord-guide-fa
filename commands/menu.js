const { MessageActionRow, MessageSelectMenu } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('menu')
		.setDescription('neshon dadan menu'),
	async execute(interaction) {

        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('select')
                .setPlaceholder('inja click kon')
                .addOptions([
                    {
                        label: 'Select me',
                        description: 'This is a description',
                        value: 'first_option',
                    },
                    {
                        label: 'You can select me too',
                        description: 'This is also a description',
                        value: 'second_option',
                    },
                ]),
        );

    await interaction.reply({ content: 'Menu!', components: [row] });


// collector
const filter = i => i.customId === 'select' && i.user.id === interaction.user.id;

const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

collector.on('collect', async i => {
	if (i.values[0] === 'first_option') {
		await i.update({ content: 'shoma option 1 ro select kardid!', components: [] });
	}
});

collector.on('end', collected => console.log(`Collected ${collected.size} items`));


    },
};