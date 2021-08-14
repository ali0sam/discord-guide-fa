const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'in command be ma 1 embed neshon mide :D',
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