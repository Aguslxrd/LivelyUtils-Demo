const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("confesion")
    .setDescription("describe tu confesion")
    .addStringOption(x => x.setName("confesion").setDescription("describe tu confesion").setRequired(true)),

    async run(client, interaction){
        const confesionString = interaction.options.getString("confesion")
        
        const embed = new EmbedBuilder()
        .setColor("DarkNavy")
        .setTitle("(!) Valhalla - > Nueva confesion")
        .setDescription(`${confesionString}`)
        .setTimestamp()

        interaction.reply({ content: "confesion enviada con exito!", ephemeral:true})

        client.channels.cache.get("978300440557006858").send({ embeds: [embed] });
    }
}