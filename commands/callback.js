const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('callback')
        .setDescription('callback your text!')
        .addStringOption(option =>
            option.setName('text')
                .setDescription('ek text baray callback vared konid')
                .setRequired(true)
        ),

async execute(interaction) {
    const text = interaction.options.getString('text');
    await interaction.reply({content: `text vared shode tavasot shoma = [${text}]`, ephemeral: true})
    }

}