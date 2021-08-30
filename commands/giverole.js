const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('giverole')
        .setDescription('the add role command')
        .addUserOption(option =>
            option.setName('member')
                .setDescription('ek user to entekhab konid')
                .setRequired(true)
        )
        .addRoleOption(option => 
            option.setName('role')
                .setDescription('ek role ra entekhab konid')
                .setRequired(true)
        ),

async execute(interaction) {
    const member = interaction.options.getMember('member');
    const role = interaction.options.getRole('role');
    member.roles.add(role)
    await interaction.reply({content: 'be user role dade shod', ephemeral: true})
    }

}