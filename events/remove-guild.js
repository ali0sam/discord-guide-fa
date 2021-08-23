module.exports = {
	name: 'guildDelete',
	execute(guild) {
        servers = global.servers - 1
		console.log(`bot az ek server remove shod, [${guild.id}], servers count: ${servers}`);
	},
};