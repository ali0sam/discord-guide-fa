module.exports = {
	name: 'ping',
	description: 'Replies with Pong!',
	async execute(interaction) {
		await interaction.reply('man ba command handler kar mikonm va az folder ``commands`` va file ``ping.js`` miam va be shoma migam [Pong!] :)');
	},
};