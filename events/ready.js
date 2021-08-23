module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		global.servers = client.guilds.cache.size
		console.log(`Ready! Logged in as ${client.user.tag} from ready.js in events folder! and servers: ${client.guilds.cache.size}`);
		client.user.setActivity(`${global.servers} servers`, { type: "WATCHING"})

		
		var checkservers = 5, checkthe_interval = checkservers * 60 * 1000; //in interval har 5 min check mishe va mitoind khodeton [5] ro ba harchi mikhayed change konid vali havaseton be api block discord bashe!
		setInterval(function() {
			client.user.setActivity(`${global.servers} servers`, { type: "WATCHING"})
		}, checkthe_interval);
	},
};