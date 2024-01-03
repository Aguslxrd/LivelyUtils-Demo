require("colors");
const { Client, GatewayIntentBits, Partials, MessageEmbed, EmbedBuilder, Activity, ActivityType, PermissionsBitField, Permissions, Collection } = require("discord.js");
    const fs = require("node:fs");
    const client = new Client({ intents: 3276799 });
    const config = require("./config.json");
    let prefix = config.prefix;
    const cooldowns = new Collection();

client.on("ready", () => {
    const time = 200 * 5;
    const status = [
        {
            name: "www.livelyutils.com",
            type: ActivityType.Watching, 
        },
    ];

    setInterval(() => {
        function randomStatus() {
            const liveUtilsStatus = status[Math.floor(Math.random() * status.length)];
            client.user.setPresence({ activities: [liveUtilsStatus], status: "dnd" });
        }
        randomStatus();
    }, time);

    console.log(`Conectado como ${client.user.username}`.red);
});
//added server
client.on("guildCreate", async (guild) => {

	const agregado = new EmbedBuilder()
	.setColor("Green")
	.setDescription("Fui agregado a un servidor")
	.addFields(
		{ name: "Nombre del Servidor", value: `${guild.name}` },
		{ name: "ID del servidor", value: `${guild.id}` },
		{ name: "Usuario del servidor", value: `${guild.memberCount}` },
		{ name: "Dueño del servidor", value: `${await (await guild.fetchOwner()).user.tag}` }
		)
	.setThumbnail(guild.iconURL())
	.setTimestamp()

	client.channels.cache.get("channellogidhere").send({ embeds: [agregado] })
});

//deleted server

client.on("guildDelete", async (guild) => {

	const agregado = new EmbedBuilder()
	.setColor("Red")
	.setDescription("Fui eliminado a un servidor")
	.addFields(
		{ name: "Nombre del Servidor", value: `${guild.name}` },
		{ name: "ID del servidor", value: `${guild.id}` },
		{ name: "Usuario del servidor", value: `${guild.memberCount}` },
		{ name: "Dueño del servidor", value: `${await (await guild.fetchOwner()).user.tag}` }
		)
	.setThumbnail(guild.iconURL())
	.setTimestamp()

	client.channels.cache.get("channelidloghere").send({ embeds: [agregado] })
});

const Discord = require("discord.js");
const { channel } = require("node:diagnostics_channel");
client.slashcommand = new Discord.Collection()


fs.readdirSync("./slashcommands").forEach(async(categorys) => {
	const commandFilesSlash = fs.readdirSync(`./slashcommands/${categorys}`).filter((archivo) => archivo.endsWith("js"))
	for(const archivo of commandFilesSlash) {
		const command = require(`./slashcommands/${categorys}/${archivo}`)
		client.slashcommand.set(command.data.name, command);
	}
})

require("./slashcommands")

client.on("interactionCreate", async(interaction) => {
	if(interaction.isCommand()) {
		const cmd = client.slashcommand.get(interaction.commandName)
		if(!cmd) return;
		await cmd.run(client, interaction)
	}
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    const args = message.content.split(" ");
    const command = args[0].toLowerCase();

    if (command === `${prefix}apagar`) {
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
            return message.reply("Solo los administradores pueden ejecutar este comando.");
        }

        message.reply("Apagando el bot...").then(() => {
            client.destroy();
            process.exit();
        });
    }

});



client.login(config.token);

function antiCrashSystem(err, channel) {
    try {
        const embed = new EmbedBuilder()
        .setColor("Red")
        .setTitle(err.message)
        .setDescription(`${err.stack}`)
        client.channels.cache.get(channel).send( {embeds: [embed]} )
    } catch {
        console.log(err.message+"\n" + err.stack);        
    }
}
process.on("uncaughtException", (err) => antiCrashSystem(err, "channelidloghere"))
process.on("unhandledRejection", (reason) => antiCrashSystem(reason, "channelidloghere"))