const { SlashCommandBuilder, MessageEmbed, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reaccion")
    .setDescription("Envia un video (url) para que el streamer reaccione.")
    .addStringOption(option => option.setName("reaccion").setDescription("Url del video a reaccionar").setRequired(false))
    .addStringOption(option => option.setName("descripcion").setDescription("Descripcion del video").setRequired(false)),

  async run(client, interaction) {
    const reaccion = interaction.options.getString("reaccion");
    const descripcion = interaction.options.getString("descripcion", "Sin descripción"); 
    const usuario = interaction.user;

    interaction.reply({ content: "Reaccion enviada con éxito!", ephemeral: true });

    const embed = new EmbedBuilder()
      .setColor(0x0099FF) 

    try {
      const response = await fetch('http://dev-club.duckdns.org:8080/api/v1/public/video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          urlVideo: reaccion,
          description: descripcion
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const responseData = await response.json();
      console.log('API response:', responseData);
    } catch (error) {
      console.error('Error sending video to API:', error);
    }
  }
};
