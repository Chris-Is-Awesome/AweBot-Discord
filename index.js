const Discord = require("discord.js");
const client = new Discord.Client();

const command = require("./command");

client.on("ready", () => {
	console.log("The client is ready!");
	client.user.setActivity("my humble servants", { type: 'WATCHING' });

	command(client, "ping", (message) => {
		message.channel.send("Pong!");
	})

	command(client, "servers", (message) => {
		client.guilds.cache.forEach((guild) => {
			message.channel.send(`${guild.name} has a total of ${guild.memberCount} members`);
		})
	})

	command(client, ['cc', 'clearchannel'], message => {
		if (message.member.hasPermission('ADMINISTRATOR')) {
			message.channel.messages.fetch().then(results => {
				message.channel.bulkDelete(results);
			})
		}
	})
})

client.login(process.env.DJS_TOKEN);