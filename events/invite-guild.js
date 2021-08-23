module.exports = {
	name: 'guildCreate',
	execute(guild) {
        servers = global.servers + 1
		console.log(`bot be ek server jadid ba id [${guild.id}] invite shod!, servers count: ${servers}`);
	},
};