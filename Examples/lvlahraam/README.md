## کاممند ها در پوشه های جدا
```javascript
fs.readdirSync("./config/commands").forEach((folder) => {
	fs.readdir(`./config/commands/${folder}`, (err, allFiles) => {
		if (err) throw err;
		const jsFiles = allFiles.filter((jsFile) => jsFile.endsWith(".js"));
		jsFiles.forEach((commandFile) => {
			const command = require(`./config/commands/${folder}/${commandFile}`);
			console.log(`${command.data.name} was loaded`);
			try {
				client.commands.set(command.data.name, command);
			} catch (err) {
				return console.log(err);
			}
		});
	});
});
```
1. اول از همه دایرکتوری پوشه اصلی کامند هارو میگیریم
2. بعدش میایم برای هر فولدری که هستش یه فایلز و ارور میزاریم
3. بعدش از کل فایل هایی که گرفتیم فیلتر میکنیم که فقط فایل های جی اس بیاد دستمون
4. بعدش یه بار دیگه برای هر فایل های جی اس ای که تو پوشه ها هست میریم و یه متغیر درست میکنیم
5. و در آخر کامند هایی که گرفتیم رو ادد به کالکشن میکنیم

## کامند ها در یک پوشه
```javascript
fs.readdirSync("./config/commands/")
	.filter((jsFiles) => jsFiles.endsWith(".js"))
	.forEach((commandFile) => {
		const command = require(`./config/commands/${commandFile}`);
		client.commands.set(command.data.name, command);
});
```
1. دوباره اول دایرکتوری اصلی رو میگیریم
2. بعدش میاییم فیلتر میکنیم که فقط جی اس بیاد دستمون
3. بعدش برای هر فایل یه متغیر میسازیم و اونارو توی کالکشن ادد میدیم

## ایونت ها در پوشه های جدا
```javascript
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
```
1. اول از همه دایرکتوری پوشه اصلی ایونت هارو میگیریم
2. بعدش میایم برای هر فولدری که هستش یه فایلز و ارور میزاریم
3. بعدش از کل فایل هایی که گرفتیم فیلتر میکنیم که فقط فایل های جی اس بیاد دستمون
4. بعدش یه بار دیگه برای هر فایل های جی اس ای که تو پوشه ها هست میریم و یه متغیر درست میکنیم
5. و در آخر ایونت هایی که گرفتیم رو لود میکنیم

## ایونت ها در یک پوشه
```javascript
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
```
1. دوباره اول دایرکتوری اصلی رو میگیریم
2. بعدش میاییم فیلتر میکنیم که فقط جی اس بیاد دستمون
3. بعدش برای هر فایل یه متغیر میسازیم و اونارو لود میدیم

این کد رو من تست کردم اروری نگرفتم

شما اگه اروری گرفتین، یا اینجا کامنت بزارین یا بیایین پیوی دیسکوردم:

Discord ID: Mahraam#8435

مرسی از علی که همچین داکیومنت ای درست کرد
