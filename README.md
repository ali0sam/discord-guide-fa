<div dir="auto">

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/826890223916154903/875037160280051752/unknown.png" />
  
</p>
<div align="center">

# یک داکیومنت برای شما🐱‍👤
</div>

# 📃پیش نیاز ها

* [Node.js v16+](https://nodejs.org/en/download/releases/)
* [Discord.js](https://www.npmjs.com/package/discord.js)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [Visual Studio Code](https://code.visualstudio.com/download) (**من از VSCODE استفاده میکنم شما هرچی راحت تر هستید استفاده کنید**)
* و فراموش نکنید که حتما باید یک اپلیکیشن و ربات در دولوپر پورتال دیسکورد بسازید
* https://discord.com/developers/applications
<img src="https://cdn.discordapp.com/attachments/826890223916154903/875073281605111918/unknown.png" />

* تیک اپلیکیشن کامند رو هم حتما موقع اینوایت بات به سروتون رو از توی دولوپر پورتال حتما بزنید چون نیازش دارید
<img src="https://cdn.discordapp.com/attachments/826890223916154903/875301636355018822/unknown.png" />

* دولوپر مود دیسکوردتون رو هم روشن کنید که بتونید ایدی هایی که نیاز دارید رو کپی کنید
  <img src="https://cdn.discordapp.com/attachments/826890223916154903/875052912227786822/dev-m.gif" width="510" height="290"/>


# 🕚قبل از شروع
 
این ریپو برای این ساخته شده که به شما کمک بکنه که بتونید از صفر بدون نگرانی و استرس کار های باحالی رو انجام بدید که شاید به نظرتون در نگاه اول سخت بیاد
  پس صاف بشینید و خوب مثال هارو **ببینید** **یاد بگیرید** و ازشون کلی ایده های خفن بگیرید و ببرید توی ادیتور هاتون که بتونید چیزای قشنگ خلق بکنید🎇

# 😃خب بیا شروع کنیم
[❕ چطور یک ربات بسازیم](https://github.com/ali0sam/discord-guide-fa#-%DA%86%D8%B7%D9%88%D8%B1-%DB%8C%DA%A9-%D8%B1%D8%A8%D8%A7%D8%AA-%D8%A8%D8%B3%D8%A7%D8%B2%DB%8C%D9%85)

[❕چطور رباتی که ساختیم رو به سرور خودمون اضافه بکنیم](https://github.com/ali0sam/discord-guide-fa#%DA%86%D8%B7%D9%88%D8%B1-%D8%B1%D8%A8%D8%A7%D8%AA%DB%8C-%DA%A9%D9%87-%D8%B3%D8%A7%D8%AE%D8%AA%DB%8C%D9%85-%D8%B1%D9%88-%D8%A8%D9%87-%D8%B3%D8%B1%D9%88%D8%B1-%D8%AE%D9%88%D8%AF%D9%85%D9%88%D9%86-%D8%A7%D8%B6%D8%A7%D9%81%D9%87-%D8%A8%DA%A9%D9%86%DB%8C%D9%85)

[📑 چه چیزایی رو باید نصب کنیم؟](https://github.com/ali0sam/discord-guide-fa#-%DA%86%D9%87-%DA%86%DB%8C%D8%B2%D8%A7%DB%8C%DB%8C-%D8%B1%D9%88-%D8%A8%D8%A7%DB%8C%D8%AF-%D9%86%D8%B5%D8%A8-%DA%A9%D9%86%DB%8C%D9%85)

[👨‍💻 ساخت اولین کامند](https://github.com/ali0sam/discord-guide-fa#-%D8%B3%D8%A7%D8%AE%D8%AA-%D8%A7%D9%88%D9%84%DB%8C%D9%86-%DA%A9%D8%A7%D9%85%D9%86%D8%AF)

[⚪ Ephemeral Message](https://github.com/ali0sam/discord-guide-fa#-ephemeral-message)

[🚀یه پروژه همیشه کوچیک نمیمونه!](https://github.com/ali0sam/discord-guide-fa#%DB%8C%D9%87-%D9%BE%D8%B1%D9%88%DA%98%D9%87-%D9%87%D9%85%DB%8C%D8%B4%D9%87-%DA%A9%D9%88%DA%86%DB%8C%DA%A9-%D9%86%D9%85%DB%8C%D9%85%D9%88%D9%86%D9%87)

[📔 کانفیگ فایل / .env](https://github.com/ali0sam/discord-guide-fa#-%DA%A9%D8%A7%D9%86%D9%81%DB%8C%DA%AF-%D9%81%D8%A7%DB%8C%D9%84--env)

[🚲 MessageActionRow](https://github.com/ali0sam/discord-guide-fa#-messageactionrow)

[📇 امبد مسیج / Embed Message](https://github.com/ali0sam/discord-guide-fa#-%D8%A7%D9%85%D8%A8%D8%AF-%D9%85%D8%B3%DB%8C%D8%AC--embed-message)


# ❕ چطور یک ربات بسازیم

**خیلی ساده میتونید برید به لینک زیر توی دیسکوردتون لوگین کنید و بعدش یه اپیلیکشن جدید به وجود بیارید بعدش میرید قسمت بات  اون اپلیکیشن و یه بات میسازید**

https://discord.com/developers/applications

https://user-images.githubusercontent.com/69610848/129358846-621efb3a-0889-45a1-b270-f174f1f82bd6.mp4


# ❕چطور رباتی که ساختیم رو به سرور خودمون اضافه بکنیم

**کافیه برید به دولوپر پورتال و توی اپلیکشنی که از قبل ساختید و قسمت OAuth2 و یه لینک بسازید که هم ربات به همراه دسترسی کامل رو به سرور شما دعوت میکنه هم دسترسی اسلش کامند رو برای استفاده اسلش کامند در سرور رو داشته باشه**

https://user-images.githubusercontent.com/69610848/129366135-142aee6a-1a22-4353-877c-816278c019af.mp4


- و یک نکته هم اینجا هست اینه که اگه میخاید کسی بجز شما نتونه ربات شما رو به سرورش دعوت بکنه باید برید توی ستینگ اپلیکیشن قسمت بات و اونجا گزینه ``Public Bot`` رو غیرفعال بکنید

<img src="https://cdn.discordapp.com/attachments/826890223916154903/875752488643469312/unknown.png" />	
<img src="https://cdn.discordapp.com/attachments/826890223916154903/875752208438804550/public-bot.png" />


# 📑 چه چیزایی رو باید نصب کنیم؟

- **اول از نصب ``node.js`` شروع میکنیم**
	- کافیه برید توی لینک زیر و یک ورژن که بالای ``16`` هستش رو بر اساس پلتفرم خودتون دانلود کنید و نصب کنید
	- https://nodejs.org/en/download/releases/
	- (تا اونجایی که من اطلاع دارم node.js از ورژن 13 به بعد دیگه روی ویندوز 7 نصب نمیشه!)❗
<br>

- **بعد از node.js میریم سراغ ادیتور که من خودم از ``vscode`` استفاده میکنم حالا شما میتونید ادیتور های دیگه هم استفاده بکنید مثل ``sublimeTEXT`` و یا ``notepad++``
	- https://code.visualstudio.com/download

- **بعد از نصب ادیتور میرسیم به نصب پکیج های ``npm`` که خیلی اصلی و مهم هستن**
	- برای نصب پکیج یک فولدر برای پروژه میسازیم که اونجا پکیج هارو نصب بکنیم و فایل هارو  بزاریم
	- بعد از ساخت فولدر کافیه یه ترمینال از اون پوشه باز بکنیم که شروع کنیم به نصب کامند ها که خب این توی ``vscode`` خیلی راحته
	- ``npm install discord.js @discordjs/rest discord-api-types @discordjs/builders``
	- در واقع ما با استفاده از دستور بالا 4 عدد پکیج اصلی که بهشون نیاز داریم رو نصب میکنیم
	
https://user-images.githubusercontent.com/69610848/129415347-6337ee72-266b-4b6f-9dd4-061201de78b1.mp4

- **اگر هم ادیتوری که استفاده میکنید ترمینال نداره میتونید خیلی راحت از توی خوده پوشه یدونه باز بکنید و پکیج ها رو نصب بکنید**
	
https://user-images.githubusercontent.com/69610848/129415975-1ddb8407-cb78-4822-9cf5-34f8dd115ce7.mp4

# 👨‍💻 ساخت اولین کامند

- ❕ **یادت باشه**
	- ما الان میخایم از یه پکیج به نام ``discord.js`` استفاده بکنیم که لینکش توی لیست پیش نیاز های بالا هست
	- توجه داشته باشید که حتما ``node.js`` رو نصب کرده باشید و ورژن اون بالای 16 باشه
	- در این اموزش زیاد با واژه ای ``guild`` رو به روی میشید که در واقع همون معنای سرور رو میده ``server``

<br>
<br>

🔵استاندارد ترین روش برای ساخت یک کامند در دیسکورد جی اس با اسلش کامند هستش که اول باید یه کامند رو برای بات ریجستر بکنیم
<br>
<br>
<br>
**2 نوع اسلش کامند وجود داره**


* guild command / کامند برای یک سرور


* global command / کامند برای بات که به صورت کلی هست

ما با نوع اول شروع میکنیم که هم سریع تره هم برای توسعه بهتره
<br>
برای ساخت کافیه یک فایل بسازید به نام ``register-command.js``
<br>
بعد از اون کافیه که کد مثال زیر رو توی اون وارد بکنید
<br>
<div dir="ltr">


```javascript
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

let token = 'TOKEN';
let guild_ID = 'SERVER_ID';
let client_ID = 'BOT_ID';

const commands = [{
  name: 'ping',
  description: 'in cmd mamolan dar javab mige [pong!] :)'
}]; 

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('dar hal ezafe kardn (/)command be server');

    await rest.put(
      Routes.applicationGuildCommands(client_ID, guild_ID),
      { body: commands },
    );

    console.log('(/) command shoma be server mored nazar ezafe shod');
  } catch (error) {
    console.error(error);
  }
})();
```


</div>
<br>
  خب هدف ما الان اینه که جای چنتا چیزو با چیزایی که میخایم عوض بکنیم
  
<div dir="ltr">

```javascript
let token = 'TOKEN';
let guild_ID = 'SERVER_ID';
let client_ID = 'BOT_ID';
```

</div>
  
**توی کد بالا 3 تا متغیر وجود داره**
<br>
  1-``token``
  
  2-``server_ID``
  
  3-``client_ID``
  
  <br>
  
  
- token:
  - میتونید این متغیر رو از دولوپر داشبورد و قسمت بات در اپلیکیشن و باتی که ساختید بگیرید
    <img src="https://cdn.discordapp.com/attachments/826890223916154903/875121251407003679/bot-token.png" />

- server id:
  - برای گرفتن ایدی سرور نیازه که دولوپر مود دیسکوردتون رو روشن کنید که توی پیش نیاز ها توضیح داده شده
      - فقط کافیه روی ایکون سرور راست کلیک بکنید و بعدش کپی ایدی رو بزنید تا ایدی سرور کپی بشه
    <img src="https://cdn.discordapp.com/attachments/826890223916154903/875131765486927942/unknown.png" />
  
  
- client id:
  - برای کپی کردن ایدی ربات هم کافیه مثل سرور روی بات کلیک کنید و گزینه کپی ایدی رو بزنید
    
    <img src="https://cdn.discordapp.com/attachments/826890223916154903/875132737072291840/unknown.png" />

**بعد از این که متغیر هارو درست عوض بکنید دارید به یه همچین چیزی توی اون قسمت نگاه میکنید**

<div dir="ltr">
  
    
```javascript
let token = 'ODy3Msdak4MjNzEyNjDU0.nmhg.xcE4Nj77nbEY5Rk4YU_6YwR_Tio';
let guild_ID = '763773594547126272';
let client_ID = '837098281712615454';
```

</div>

بعدش که جای متغیر هارو عوض کردید فقط کافیه که فایل رو ذخیره بکنید و بعدش با ``node.js`` اونو ران بکنید
<br>
  - ``node register-command.js``
  
<img src="https://cdn.discordapp.com/attachments/826890223916154903/875297595189256223/unknown.png" />

- 🔴 **یه نکته هم اینجا وجود داره و لازمه که بگم اینه که این فایل نقش بات رو نداره و فقط یبار بر اون اساسی که میخاید کانفیگ میکنید و ران میکنید و کامند رو اضافه میکنه همین!**

خب همون جوری که دیدید ما اسلش کامندمون رو به راحتی درست کردیم
<br>
و وقتی الان بریم توی سرور موردنظر و تایپ بکنیم ``ping/`` میبینیم که برای بات یک دستور پینگ با توضیحاتی که نوشته بودیم ساخته شده
<br>
<br>
<img src="https://cdn.discordapp.com/attachments/826890223916154903/875302762630496266/unknown.png" />
<br>
<br>
برای اضافه کردن اسلش کامند برای همه ای سرور های بات هم فقط کافیه که یک قسمت از کد اولیه بالا رو عوض بکنید که 2 تا نکته وجود داره❕
  - اضافه شدن هر دستور به صورت گلوبال در ربات چیزی حدود 1 ساعت زمان میبره از طرف API دیسکورد
  - ما این نوع اضافه کردن رو برای کار های تستی پیشنهاد نمیکنیم و بهتره اول دستورات خودتون رو توی یه سرور تست اضافه و تست کنید و بعدش اونا رو به صورت گلوبال منتشر کنید
<br>

<div dir="ltr">

```javascript
await rest.put(
	Routes.applicationCommands(CLIENT_ID),
	{ body: commands },
);
```

</div>

<br>

**خب بعد از اینکه ما دستور رو به سرور اضافه کردیم فقط کافیه که اونو فعال بکنیم اسونه نه؟**
<br>
با ساخت یه فایل به نام ``bot.js`` شروع میکنیم
<br>
و بعدش میایم کد مثال زیر رو توی اون قرار میدیم
<br>

<div dir="ltr">

```javascript
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
let token = 'TOKEN';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	}
});

client.login(token);
```

</div>
<br>
الان توی کد بالا تنها چیزی که نیازه که عوض بشه متغیر توکن هستش که خب مثل کد اول فقط نیازه از دولوپر پورتال کپی و پیست کنیدش 
<br>
بعد از گذاشتن توکن فقط کافیه که فایل رو ذخیره و ران بکنید
<br>

- ``node bot.js``
<br>
<br>

<img src="https://cdn.discordapp.com/attachments/826890223916154903/875314328146960464/unknown.png" />
<br>

اگه با همچین پیامی رو به رو شدید یعنی ربات شما اماده به کار هستش
<br>

و الان دیگه فقط کافیه برید توی سروری که کامند رو توش ثبت کردید و تایپ بکنید ``ping/`` و اینتر رو فشار بدید
<br>

- 🎉 هورا! همون طوری که میبینید بات در جواب دستور شما گفت ``!Pong`` 
<img src="https://cdn.discordapp.com/attachments/826890223916154903/875314924006572092/unknown.png" />
<br>
<br>

# ⚪ Ephemeral Message

- ⚪ **بعضی مواقع هم شاید دوست نداشته باشید چت با پیام بات شلوغ بشه و اون پیام رو فقط استفاده کننده ببینه و موقع باشه**

<div dir="ltr">
	
```javascript
await interaction.reply({ content: 'Pong!', ephemeral: true });
```

</div>

- فقط کافیه خط ارسال مسیج رو با اون این خط عوض بکنید و یه ephemeral بهش اضافه بکنید و اونو true تعریف بکنید



<br>

# 🚀یه پروژه همیشه کوچیک نمیمونه! 

**ما توی اموزش بالا به شما پایه ترین راه برای درست کردن یه دستور و راه اندازی اون رو اموزش دادیم ولی یه سری چیز ها رو باید برای نظم عوض بکنید**
<br>
	
دیدید که برای استفاده از توکن سرور ایدی یا ایدی بات اونا رو توی خود کد تعریف میکردیم
<br>
	
ولی این کار در یه پروژه ای استاندارد توصیه نمیشه و بهتره شما یه کانفیگ فایل داشته باشید که اطلاعات مهمی که نیاز دارید توی اون تعریف بشه و بعد بتونید به راحتی اونارو تو کد خودتون استفاده بکنید
<br>

# 📔 کانفیگ فایل / .env

برای استفاد از یه کانفیگ ها توی یه کد روش های زیادی هست ولی ما میخایم اینجا از پکیج ``dotenv`` استفاده بکنیم که بعدا همه جوره به کارمون میاد
<br>
	
- با نصبش شروع میکنیم که عین بقیه پکیج هاست و فرقی نداره 
	- ``npm i dotenv``
<br>

بعد از نصب میریم سراغ ساخت یه فایل جدید توی فولدر بات به نام ``env.``
<br>
	
و دیتا هارو به صورت خیلی ساده توی فایل تعریف میکنیم من الان فقط 3 تا پارامتر نیاز دارم 
<br>

<div dir="ltr">

```
TOKEN=ODJ3MDk4jgxNzWjE1BDU0.YI.xksnks77ebvqEY1Rk4YU_2YwE_Tyo
CLIENT_ID=837097281712415454
GUILD_ID=763773694542126274
```
</div>

<br>
	# 📃 کامند هندلر
⚪ **بعد از اینکه دیتا هارو ذخیره کردیم دیگه فعلا باهاشون کاری نداریم و میریم سراغ ساخت یه فولدر رو ساخت فایل جدا برای کامند**
<br>


- **یه فولدر بسازید به نام ``commands`` و یه فایل هم توش بسازید به نام ``ping.js`` و کد زیر رو توش قرار بدید و سیو کنید**


<div dir="ltr">

```javascript
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('ek command ping az command handler ke toy [/] command ha ham register mishe :D'),
	async execute(interaction) {
		await interaction.reply('man ba command handler kar mikonm va az folder ``commands`` va file ``ping.js`` miam va be shoma migam [Pong!] :)');
	},
};
```

</div>
<br>

- ❗ **یادتون باشه که این پکیج رو حتما نصب کرده باشید**
	- ``npm i @discordjs/builders``

- ❓ **حالا با این عوض کردن کد ما چیکار کردیم؟**
	- ما با این کار دیگه نیاز نیست دونه دونه اسلش کامند هارو به سرور اضافه بکنیم و هر دستوری رو که به صورت کد بالا براش یه فایل بسازیم و توی پوشه ای کامندز بزاریم رو میتونید مستقیم به اسلش کامند ها اضافه بکنیم

- قبلش نیازه یکمی توی کد ``register-command.js`` دست ببریم و عوض کنیمش

<div dir="ltr">

```javascript
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
// ezafe kardn [dotenv] be file
require("dotenv").config();

// daryaft data ha az file [.env]
let clientID = process.env.CLIENT_ID
let token = process.env.TOKEN
let guildID = process.env.GUILD_ID

// def kardn e command ha az folder [commands]
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientID, guildID),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
```

</div>

- **اگه به کد بالا دقت کرده باشید ما الان 2 تا کار انجام دادیم**
	- اولیش اینه که الان با ران کردن این فایل تمام فایل های کامند هایی که توی پوشه ``commands`` ساختیم اتوماتیک ساخته میشه و به اسلش کامند های سرور اضافه میشه
	- دومیش هم اینه که ما دیگه نیاز نیست چیزایی مثل توکن و سرور ایدی و ایدی بات رو توی این کد تعریف بکنیم به صورت مستقیم و اونا رو از فایل ``env.`` میگیریم

<br>

**حالا نوبت فایل ``bot.js`` هستش که باید بهینه بشه**
<br>

جدا از اینکه باید متغیر توکن رو از  دیگه از فایل ``env.`` داخلش قرار بدیم باید دستورات بات رو هم به یک فولدر و فایل های جدا انتقال بدیم
<br>

دلیلش هم اینه که فرض کنید شما یه بات دارید با بیش از 50 تا دستور و اگه قصد داشته باشید هر بار یکی از دستورات رو ادیت بدید کار خیلی سختی خواهد بود چون باید همش توی یه فایل بزرگ و شلوغ این ور و اون ور برید تا بتونید تیکه تیکه اون دستور رو ادیت بدید
<br>

برای راحتی بهتر تمامی کد های توی فایل ``bot.js`` رو پاک کنید و با کد پایین جای گزین بکنید
<br>

<div dir="ltr">

```javascript
const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const fs = require('fs');
require("dotenv").config();
let token = process.env.TOKEN

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (!client.commands.has(commandName)) return;

	try {
		await client.commands.get(commandName).execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});


client.login(token);
```

</div>
<br>

بعد از اینکه کد رو عوض کردیم کافیه فقط ذخیرش بکنیم و فایل رو ران بکنیم
<br>

- ``node bot.js``
	- و دستور ``ping/`` رو درون سرور میزنیم

<br>			

<img src="https://cdn.discordapp.com/attachments/826890223916154903/875351539240271882/unknown.png" />
<br>

همونطور که میبینید ما تونستیم با موفقیت 2 تا کار خوب و مهم توی کد هامون انجام بدیم 
<br>

* **انتقال متغیر های مودرنیاز به یک فایل جدا و فراخونی اونا به درون کد های اصلی**
* **جدا کردن دستورات و اتقال اونها به یک پوشه ای جدا و فایل های جدا برای مدیریت و نظم بهتر**

# 🚲 MessageActionRow

- MessageActionRow چیه؟
	- شما که قرار نیست همیشه جواب دستورات رو با یه پیام خشک و خالی بدید!
	- MessageActionRow بهمون کمک میکنه که بتونیم چیزای جالبی رو مثل دکمه هارو به پیام های خودمون اضافه بکنیم و ازشون استفاده بکنیم

<br>

# 📇 امبد مسیج / Embed Message
	
🔵 **امبد مسیج یه نوع پیامه ولی قشنگ تر مرتب تر و توی یک کادر قرار داره و به نظر بهتر میاد**


- ساخت دستور رو شروع میکنیم
	- همون طور که میدونید فقط کافیه برید توی پوشه commands و یک فایل بسازید برای کامند که من اینجا اسم فایل رو گذاشتم ``embed.js`` شما هرچی دوست دارید بزارید
	- بعدش کافیه کد پایین رو توی فایل وارد بکنید


<div dir="ltr">

```javascript
const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('embed')
		.setDescription('be ma e embed mide!'),
    async execute(interaction) {
				// embed
				const embed = new MessageEmbed()
                .setColor('#bd282d')
                .setTitle('be in text migan [title]')
                .setURL('https://github.com/ali0sam/discord-guide-fa')
                .setAuthor('be in text migan [author]', 'https://cdn.discordapp.com/attachments/826890223916154903/876116512803553330/AYAYA.png', 'https://github.com/')
                .setDescription('text text text text!')
                .setThumbnail('https://cdn.discordapp.com/attachments/826890223916154903/876115837013069854/SuchMeme.png')
                .addFields(
                    { name: 'Regular field title', value: 'Some value here' },
                    { name: '\u200B', value: '\u200B' }, // inja vase in fild haro ba [\u200B] por kardin chon injori 1 field khali mishe va mire badi
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                )
                .addField('Inline field title', 'Some value here', true) // injori ham mitonid field tarif konid vali model bala nazm behtari dare
                .setImage('https://cdn.discordapp.com/attachments/826890223916154903/876115904038064138/Valorant_KAY-O-Trailer-1024x576.jpg')
                .setTimestamp() 
                .setFooter('Some footer text here', 'https://cdn.discordapp.com/attachments/826890223916154903/876116512803553330/AYAYA.png');


		return interaction.reply({content: 'inja ro negah kon, e embed message!', embeds: [embed] });
	},
};
```

</div>

- ⚪ بعد از سیو کردن فایل بالا مثل مثال کامند ریجستر که برای کامند هندلر توی بالا دیدید کامندش رو به سرور اضافه میکنید


- حالا ربات رو ران بکنیم
	- ``node bot.js``


https://user-images.githubusercontent.com/69610848/129451238-1d303c18-92a1-4a82-bf72-e30fa74dbc32.mp4



# 🔳 دکمه / button

- دکمه ها میتونن خیلی مفید باشن و استفاده ازشون کلی حال میده 
	- بریم ببنیم با دکمه ها میشه چیکار کرد و نکته هارو هم بهتون بگم

اول مثل همیشه توی فولدر ``commands`` یه فایل برای دستور میسازیم که اینجا من اسمشو میزارم ``button.js``

<br>

بعد از اون میایم و کد پایین رو توی فایل قرار میدیم

<div dir="ltr">

```javascript
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
                .setStyle('PRIMARY'),
        );

		return interaction.reply({content: 'tada!', components: [row]});
	},
};
```

</div>

- بعد از این فقط کافیه فایل رو سیو بکنیم و یبار کامند های سرور رو با فایل ``register-command.js`` ذخیره بکنیم و ربات رو ران کنیم
	- ``node bot.js``

	VIDEO HERE!!!


<br>

- 🔵 **بعضی از مواقع هم میخایم که دکمه غیر فعال باشه و قابل فشار دادن نباشه پس میایم این کار میکنیم**
	- ``.setDisabled(true)``

<div dir="ltr">

```javascript
// button
.addComponents(
    new MessageButton()
        .setCustomId('primary')
	    .setLabel('test')
        .setStyle('PRIMARY')
        .setDisabled(true),
        );
```

</div>

- 😃 **نظرت راجب یه ایموجی به همراه دکمه چیه؟**
	- ``.setEmoji()``

🔷 **ایموجی ساده**

<div dir="ltr">

```javascript
.addComponents(
    new MessageButton()
        .setCustomId('primary')
        .setLabel('test')
        .setStyle('PRIMARY')
		.setEmoji('🎉'),
        );
```

</div>

🔷 **سرور ایموجی**

<div dir="ltr">

```javascript
.addComponents(
    new MessageButton()
        .setCustomId('primary')
        .setLabel('test')
        .setStyle('PRIMARY')
		.setEmoji('emojiID'),
        );
```

</div>

- ⚠ حتما هم حواستون باشه که بات توی اون سرور که ایموجی مال اونه باشه

<br>

# 💂‍♂️ کالکتور

- 🔄 **عملکرد در اثر فشرده شده**


- رسیدیم به بحث اصلی که توی اون باید دکمه ها بعد از فشرده شدن یک کار رو برای ما انجام بدن
	- **و ما اینجا برای این کار از کالکتور استفاده میکنیم**
		- کالکتور چیه؟
		-بیاین اینطوری فرض بکنیم که کالکتور یه نگهبانه که ما میزاریمش یه تایم خاصی حواسش به یه چیزی باشه
		- من الان به طور مثال برای فایل ``button.js`` یه کالکتور میسازم


<div dir="ltr">

```javascript
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
                .setEmoji('851588633421152267'),
                );
// collector
const filter = i => i.customId === 'primary' && i.user.id === '575933571186032641';

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
```

</div>

- **توضیح چنتا نکته از کد بالا و قسمت کالکتور اون:**
	- ما معمولا برای این از متد ``.setCustomId()`` داخل دکمه ها استفاده میکنیم چون قراره از اون ایدی توی کالکتور برای شناسایی استفاده بشه
	- و ما در بخش کالکتور اول از همه میایم یه فیلتر میزاریم به این صورت که بیاد دکمه رو به ایدی و ایدی یوزری که اونو فشار میده فیلتر میکنه کارکردش رو
	- ``const filter = i => i.customId === 'primary' && i.user.id === '575933571186032641';``
	- البته برای یوزر ایدی دی کد بالا حتما نیاز نیست که ایدی رو دستی وارد بکنیم و میتونید از مثال پایین استفاده بکنید که به صورت خودکار ایدی اون فردی که از دستور استفاده کرده رو درنظر بگیره
	- ``const filter = i => i.customId === 'primary' && i.user.id === interaction.user.id;``
	- و در قسمت collector هم یک کالکتور ساخته میشه با فیلتر هایی که تعریف کردیم و تایم ``15000`` که به میلی ثانیه هست و میشه ``15`` ثانیه و یعنی بعد از 15 ثانیه این کالتور تموم میشه
	- و در اخر هم کد زیر وجود داره که میاد بعد از تموم شدن تایم محاسبه میکنه که چند تا دکمه از کالکتور کلیک شده
	- ``collector.on('end', collected => console.log(`Collected ${collected.size} items`));``

VIDEO HERE!!!


-  **استایل دکمه ها**


- در کل 5 تا استایل دکمه وجود داره
	- ``PRIMARY``
	- ``SECONDARY``
	- ``SUCCESS``
	- ``DANGER``
	- ``LINK``


- ⚪ **در قالب یه کامند دیگه همشون رو براتون این زیر یه مثال میزنم**
	- ``buttons.js``


<div dir="ltr">

```javascript
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
                .setUrl('https://github.com/ali0sam/discord-guide-fa')
                .setStyle('LINK'),
                );


 // send message and button
 return interaction.reply({content: 'style ha!', components: [row]});
},
};
```

</div>


> - ❗ **یه نکته هم اینجا هست اینه که دکمه های استایل ``LINK`` نباید ``setCustomId().`` داشته باشن و فقط میتونید از ``setUrl().`` توش استفاده بکنید**








  
  
  
  
</div>
