// Important shit
const Discord = require("discord.js");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER'] });

// Fields
const guildId = "771506280531099649";
const welcomeMessageId = "799054956740345896";
const myUserId = "222533981747281921";

const streamAnnouncementsChannel = "777284448206061588";

const twitchRoleId = "799058842990149652";
const multiplayerRoleId = "799059050125721618";

const twitchEmoteId = "799061444767121428";
const multiplayerEmoteId = "799070502551158804";

// When bot becomes active
client.once("ready", () => {
	console.log("*enters the barn*");

	// Set bot activity
	client.user.setActivity("my servants 🐐", {type: "WATCHING"});
})

// When a reaction is added to welcome message, add role
client.on("messageReactionAdd", async (reaction, user) => {
	if (reaction.partial) await reaction.fetch();

	if (reaction.message.id == welcomeMessageId)
	{
		const guild = await client.guilds.fetch(guildId);
		const member = await guild.members.fetch(user);
		let role = null;

		switch (reaction.emoji.id)
		{
			case twitchEmoteId:
				role = twitchRoleId;
				break;
			case multiplayerEmoteId:
				role = multiplayerRoleId;
				break;
		}

		if (role)
		{
			member.roles.add(role);
			console.log(`Added role ${member.guild.roles.cache.get(role).name} to ${member.user.tag}`);
		}
	}
})

// When a reaction is removed from welcome message, remove role
client.on("messageReactionRemove", async (reaction, user) => {
	if (reaction.partial) await reaction.fetch();

	if (reaction.message.id == welcomeMessageId) {
		const guild = await client.guilds.fetch(guildId);
		const member = await guild.members.fetch(user);
		let role = null;

		switch (reaction.emoji.id) {
			case twitchEmoteId:
				role = twitchRoleId;
				break;
			case multiplayerEmoteId:
				role = multiplayerRoleId;
				break;
		}

		if (role) {
			member.roles.remove(role);
			console.log(`Removed role ${member.guild.roles.cache.get(role).name} from ${member.user.tag}`);
		}
	}
})

// When I go live
let streamAnnouncementMessage;
let streamTitle;
client.on("presenceUpdate", (oldPresence, newPresence) => {
	if (newPresence.user.id != myUserId) return false;
	// If currently doing something
	if (newPresence.activities.length > 0)
	{
		newPresence.activities.forEach(activity => {
			if (activity.type == "STREAMING") {
				// Send message
				if (!streamTitle) {
					const channel = client.channels.cache.get(streamAnnouncementsChannel);
					const output = `📺 **Chris is Awesome** is now live on ${activity.name}! 📺\nHe is streaming **${activity.details}** at ${activity.url} <@&${twitchRoleId}>`;
					channel.send(output).then((message => {
						streamAnnouncementMessage = message;
					}))
					streamTitle = activity.details;
					return true;
				}
				else // Edit message
				{
					// If stream title changes
					if (activity.details != streamTitle) {
						const output = `📺 **Chris is Awesome** is now live on ${activity.name}! 📺\nHe is streaming **${activity.details}** at ${activity.url} <@&${twitchRoleId}>`;
						streamAnnouncementMessage.edit(output);
					}
				}
			}
		})
	}
	else // If stream ended
	{
		const output =
			`❌Chris is Awesome has stopped streaming. ❌\nHe was streaming **${streamTitle}**\nFeel free to watch the VOD either on Twitch or on YouTube the next day!`;
		streamAnnouncementMessage.edit(output);
		streamTitle = "";
		streamAnnouncementMessage = null;
	}
})

client.login(process.env.DJS_TOKEN);