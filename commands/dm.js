const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dm')
        .setDescription('dm be ek user.')
        // options
        .addUserOption(option =>
            option.setName('targetuser')
            .setDescription('ek user ra entekhab konid baray DM!')
            .setRequired(true)
            )
            .addStringOption(option =>
                option.setName('text')
                    .setDescription('text khod ra varid konid')
                    .setRequired(true)
            ),
            

async execute(interaction) {
    const mem = interaction.options.getUser('targetuser')
    const text = interaction.options.getString('text');
    mem.send(text);
    await interaction.reply({content: 'text shoma ersal shod be DM!', ephemeral: true});
    }

}