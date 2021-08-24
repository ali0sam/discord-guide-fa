// age mikhayin command ha tuye folder haye joda gune bashan
fs.readdirSync("./config/commands").forEach((folder) => {
	fs.readdir(`./config/commands/${folder}`, (err, allFiles) => {
		if (err) throw err;
		const jsFiles = allFiles.filter((jsFile) => jsFile.endsWith(".js"));
		jsFiles.forEach((commandFile) => {
			const command = require(`./config/commands/${folder}/${commandFile}`);
			console.log(`${command} was loaded`);
			try {
				client.commands.set(command.data.name, command);
			} catch (err) {
				return console.log(err);
			}
		});
	});
});

// age kolan mikhayin command ha tuye ye folder bashan
fs.readdirSync("./config/commands/")
	.filter((jsFiles) => jsFiles.endsWith(".js"))
	.forEach((commandFile) => {
		const command = require(`./config/commands/${commandFile}`);
		client.commands.set(command.data.name, command);
});

// age mikhayi event ha tuye folder joda basahn, masalan `once` ba `on` ghati nabashe
fs.readdirSync("./config/events/").forEach((folder) => {
	fs.readdir(`./config/events/${folder}`, (err, allFiles) => {
		if (err) throw err;
		const jsFiles = allFiles.filter((jsFile) => jsFile.endsWith(".js"));
		jsFiles.forEach((eventFile) => {
			const event = require(`./config/events/${folder}/${eventFile}`);
			console.log(`${event} was loaded`);
			try {
				if (event.once) {
					client.once(event.name, (...args) => event.execute(...args));
				} else {
					client.on(event.name, (...args) => event.execute(...args));
				}
			} catch (err) {
				console.log(err);
			}
		});
	});
});

// age kolan mikhayin event ha tuye ye folder bashan
fs.readdirSync("./config/events/")
	.filter((jsFiles) => jsFiles.endsWith(".js"))
	.forEach((eventFile) => {
		const event = require(`./config/events/${eventFile}`);
		if (event.once) {
			client.once(event.name, (...args) => event.execute(...args));
		} else {
			client.on(event.name, (...args) => event.execute(...args));
		}
});

/** notes:
 * in code ro man khodam test kardam, hich iradi nadast
 * age iradi dasht hatman behem begin tu pv discord am ya hamin ja comment bezarin, id discord: Mahraam#8435
 * mamnun az ali ke hamchin document khubi skhate
*/
