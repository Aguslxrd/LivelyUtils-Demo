const fs = require("node:fs");
const path = require("node:path");
const { Routes, Client } = require("discord.js");
const { REST } = require("@discordjs/rest");

const commands = []

fs.readdirSync("./slashcommands").forEach(async(categorys) => {
	const commandFilesSlash = fs.readdirSync(`./slashcommands/${categorys}`).filter((archivo) => archivo.endsWith("js"))
	for(const archivo of commandFilesSlash) {
		const command = require(`./slashcommands/${categorys}/${archivo}`)
		commands.push(command.data.toJSON())
	}
})

const rest = new REST({ version: "10" }).setToken("YOURDISCORDBOTTOKENHERE")
async function creareSlash(){
	try{
		await rest.put(
			Routes.applicationCommands("APPIDBOT"), {  //app id from discorddeveloper web
				body: commands
			})
	} catch(error) {
		console.log(error)
	}
}
creareSlash()