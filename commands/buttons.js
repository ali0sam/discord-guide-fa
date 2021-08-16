const { MessageActionRow, MessageButton } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('buttons')
		.setDescription('tamam style haye dokme ha'),
	async execute(interaction) {
        // buttons
		const row = new MessageActionRow()
        .addComponents(
                new MessageButton()
                .setCustomId('1')
                .setLabel('PRIMARY button')
                .setStyle('PRIMARY'),
                                

                new MessageButton()
                .setCustomId('2')
                .setLabel('SECONDARY button')
                .setStyle('SECONDARY'),


                new MessageButton()
                .setCustomId('3')
                .setLabel('SUCCESS button')
                .setStyle('SUCCESS'),


                new MessageButton()
                .setCustomId('4')
                .setLabel('DANGER button')
                .setStyle('DANGER'),


                new MessageButton()
                .setLabel('LINK button')
                .setURL('https://github.com/ali0sam/discord-guide-fa')
                .setStyle('LINK'),
                );


 // send message and button
 return interaction.reply({content: 'style ha!', components: [row]});
},
};