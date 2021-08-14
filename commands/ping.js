const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('ek command ping az command handler ke toy [/] command ha ham register mishe :D'),
	async execute(interaction) {
		await interaction.reply('man ba command handler kar mikonm va az folder ``commands`` va file ``ping.js`` miam va be shoma migam [Pong!] :)');
	},
};