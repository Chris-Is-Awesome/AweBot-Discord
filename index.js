// Important shit
const Discord = require("discord.js");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER'] });
const commands = require("./command.js");

// Fields
const guildId = "771506280531099649";
const welcomeMessageId = "799054956740345896";
const myUserId = "222533981747281921";

const devChannel = "798669951577751583";
const streamAnnouncementsChannel = "777284448206061588";

const twitchRoleId = "799058842990149652";
const multiplayerRoleId = "799059050125721618";

const twitchEmoteId = "799061444767121428";
const multiplayerEmoteId = "799070502551158804";

const friends = {
	"the Legend of Zelda series": new Array("Link", "Zelda", "Ganondorf", "Ganon", "Impa", "Sheik"),
	"Legend of Zelda: Ocarina of Time": new Array("Gohma", "King Dodongo", "Barinade", "Phantom Ganon", "Volvagia", "Morpha", "Bongo Bongo", "Dark Link", "Dead Hand", "Twinrova", "Ganondorf", "Ganon", "Epona", "the Great Fairy", "Impa", "Link", "Navi", "Pierre", "Zelda", "Rauru", "the Running Man", "Sheik", "the Deku Tree", "Fado", "Mido", "Saria", "Skull Kid", "the Happy Mask Salesman", "the Poe Collector", "Ingo", "Malon", "Talon", "Dampé", "the Bean Guy", "King Zora", "Lord Jabu-Jabu", "Princess Ruto", "Biggoron", "Nabooru", "Kotake", "Koume"),
	"Legend of Zelda: Majora's Mask": new Array("Captain Keeta", "Wart", "Igos du Ikana", "Garo Master", "Odolwa", "Goht", "Gyorg", "Twinmold", "Majora's Mask", "Majora's Incarnation", "Majora's Wrath", "Link", "Kaepora Gaebora", "Skull Kid", "Zora Link", "Cermia", "Deku Link", "Epona", "Fiercy Deity Link", "Goron Link", "Tingle", "Tatl", "Tael", "Keaton", "Anju", "the Happy Mask Salesman", "Kafei", "Pierre", "the Bean Guy", "Kotake", "Koume", "Mikau", "Garo", "the Poe Collector", "Dampé"),
	"Legend of Zelda: The Wind Waker": new Array("Gohma", "Kalle Demos", "Gohdan", "Helmaroc King", "Jalhalla", "Molgera", "Puppet Ganon", "Ganondorf", "Phantom Ganon", "Mothula", "Beedle", "Cyclos", "Daphnes Nohansen Hyrule", "Fado", "the  Queen of Fairies", "Fishmen", "Gonzo", "the Great Fairy", "Laruto", "Link", "Zelda", "Senza", "Tetra", "Zephos", "Zuko", "Mako", "Niko", "Aryll", "Jabun", "Orca", "Grandma", "Anton", "Kamo", "Kreeb", "Lenzo", "Linda", "Maggie", "Mila", "Garrickson", "Salvatore", "Minenco", "Tott", "Zunari", "Hoskit", "Baito", "Valoo", "Carlov", "Makar", "Manny", "the Deku Tree", "Ankle", "Knuckle", "David Jr.", "Tingle", "Komali", "Medli", "Quill", "Mrs. Marie", "the King of Red Lions", "Sue-Belle"),
	"Legend of Zelda: Twilight Princess": new Array("Howard", "Hugo", "Jamal", "Jake", "Leroy", "Ook", "King Bulblin", "Dangoro", "Twilit Bloat", "Deku Toad", "Skull Kid", "Death Sword", "Darkhammer", "Phantom Zant", "Diababa", "Fyrus", "Morpheel", "Stallord", "Blizzeta", "Armogohma", "Argorok", "Zant", "Puppet Zelda", "Ganon", "Ganondorf", "Epona", "the Great Fairy", "Hero's Shade", "Impaz", "Link", "Midna", "Ooccoo", "the Postman", "Beth", "Colin", "Fado", "Hanch", "Ilia", "Jaggle", "Malo", "Mayor Bo", "Ordona", "Pergie", "Rusl", "Sera", "Talo", "Uli", "Coro", "Faron", "Eldin", "Trill", "Plumm", "Barnes", "Luda", "Renado", "Shad", "Darbus", "Gor Amoto", "Gor Coron", "Gor Ebizo (sva)", "Gor Liggs", "Fyer", "Auru", "Falbi", "Lanayru", "Hena", "Iza", "Purdy", "Prince Ralis", "Rutela", "Agitha", "Charlo", "Chudley", "Dr. Borville", "Gengle", "Hannah", "Jovani", "Kili", "Louise", "Madame Fanadi", "Misha", "Zelda", "Purlo", "Soal", "Telma", "Ashei", "Yeta", "Yeto"),
	"Legend of Zelda: Phantom Hourglass": new Array("Blaaz", "Cyclok", "Crayk", "Dongorongo", "Gleeok", "Eox", "Bellum", "Bellumbeck", "Link", "Tetra", "Oshus", "Linebeck", "Ciela", "Leaf", "Neri", "Astrid", "Biggoron", "Beedle", "Postman", "Salvatore", "Jolene"),
	"Legend of Zelda: Spirit Tracks": new Array("Mothula", "Dark Link", "Stagnox", "Fraaz", "Phytops", "Cragma", "Byrne", "Skeldritch", "Cole", "Malladus", "Link", "Zelda", "Beedle", "Rael", "Anjean", "Postman", "Ferrus", "Alfonzo", "Niko", "Linebeck III", "Joynas", "Bunnio", "Honcho"),
	"Legend of Zelda: Skyward Sword": new Array("Ghirahim", "Scaldera", "Moldarach", "the Imprisoned", "Koloktos", "Tentalus", "Levias", "Demise", "Fi", "Link", "Zelda", "Impa", "Groose", "Beedle", "Levias", "Strich", "Cawlin", "Batreaux", "Fledge", "Gaepora", "Horwell", "Oawlan", "LD-301S Scrapper", "Kina", "Dodoh", "Bucha", "Erla", "Lopsa", "Machi", "Oolo", "Yerbal", "Eldin", "Faron", "Lanayru"),
	"Legend of Zelda: A Link Between Worlds": new Array("Yuga", "Moldorm", "Margomill", "Gemesaur King", "Arrghus", "Knucklemaster", "Stalblind", "Zaganaga", "Dharkstare", "Grinexx", "Yuga Ganon", "Shadow Link", "Gramps", "Dampe", "Gulley", "Seres", "Osfala", "Irene", "Oren", "Rosso", "Impa", "Ravio", "Hilda", "Zelda", "Link", "Blacksmith", "Sahasrahla", "Mother Maiamai", "Thief Girl", "the Great Fairy"),
	"Legend of Zelda: Breath of the Wild": new Array("Hinox", "Talus", "Molduga", "Stalnox", "Windblight Ganon", "Fireblight Ganon", "Thunderblight Ganon", "Ganon", "Calamity Ganon", "Waterblight Ganon", "Urbosa", "Zelda", "Link", "Mipha", "Revali", "Daruk", "Kilton", "Kass", "Epona", "Hetsu", "King Rhoam", "Robbie", "Yunobo", "the Deku Tree", "the Great Fairy", "Riju", "Master Kohga", "Sidon", "Impa", "Paya", "Beedle"),
	"Hyrule Warriors": new Array("King Dodongo", "Gohma", "Manhandla", "Argorok", "Ganon", "Melmaroc King", "Phantom Ganon", "the Imprisoned", "Link", "Impa", "Sheik", "Lana", "Zelda", "Ganondorf", "Darunia", "Ruto", "Agitha", "Midna", "Zant", "Fi", "Ghirahim", "Cia", "Volga", "Wizzro", "Twili Midna", "Young Link", "Tingle", "Cucco", "Linkle", "Skull Kid", "Toon Link", "Tetra", "King Daphnes", "Medli", "Marin", "Toon Zelda", "Ravio", "Yuga", "the Great Fairy", "Proxi"),
	"Witcher 3": new Array("Geralt of Rivia", "Keira Metz", "Vesemir", "Dandelion", "Ciri of Cintra", "Yennefer of Vengerberg", "Eskel", "Triss Merigold", "Gaunter O'Dimm", "Eredin", "Dijkstra"),
	"the Ittle Dew series": new Array("Ittle Dew", "Tippsie", "Apathetic Frog", "Old Man"),
	"Ittle Dew": new Array("Ultra Fishbunjin 3000", "Jenny Bird", "Jenny Bunny", "Lichious Turnip", "Itan Carver", "Masked Ruby", "Jenny Fox", "Jenny Deer", "Jenny Frog", "Jenny Tiger"),
	"Ittle Dew 2": new Array("Cyber Jenny", "Osalig", "Jenny Cat", "Jenny Mermaid", "Jenny Mole", "Le Biadlo", "Lenny", "Mapman", "Safety Jenny", "Slayer Jenny", "Simulacrum", "Rich Turnip", "Passel Carver", "Mechabun", "Jenny Berry", "Jenny Bun", "Magic Crystal", "Jenny Lemon", "Jenny Shark", "Apathetic Jenny", "Jenny Flower", "Conrstruct ", "Dream Rock", "Business Casual Man", "That Guy"),
	"Slap City": new Array("Asha", "Jenny Fox", "Business Casual Man", "Goddess of Explosions", "Masked Ruby", "Ittle Dew", "Princess Remedy", "Ultra Fishbunjin 3000"),
	"the Mario series": new Array("Mario", "Luigi", "Bowser", "Princess Peach", "Princess Daisy", "Toad", "Yoshi", "King Boo", "Rosalina", "Bowser Jr.", "Pauline", "Toadette", "Captain Toad", "Wario", "Kamek", "Waluigi", "Donkey Kong", "Diddy Kong", "Birdo"),
	"Paper Mario: The Thousand Year Door": new Array("Admiral Bobbery", "Madame Flurrie", "Marilyn", "Beldam", "Merlon", "Bumpty", "Ms. Mowz", "Pennington", "Flavio", "Goombella", "Shadow Queen", "Heff T.", "Jolene", "Vivian", "Koops", "Yoshi", "Puni", "Rawk Hawk", "Professor Frankly"),
	"Ori and the Blind Forest": new Array("Gumo", "Ori", "Ku", "Kuro", "Naru", "Sein"),
	"Ori and the Will of the Wisps": new Array("Baur", "Ori", "Grom", "Gumo", "Naru", "Motay", "Opher", "Sein", "Seir", "Shriek", "Kii", "Ku", "Kwolok", "Lupo", "Twillen", "Tuley", "Tokk", "Mora", "Mokk the Brave", "Howl"),
	"A Hat in Time": new Array("Badge Seller", "Mustache Girl", "DJ Grooves", "the Conductor", "Hat Kid", "Toilet of Doom", "the Snatcher", "Mafia Boss", "Bow Kid", "Queen Vanessa", "The Empress"),
	"Celeste": new Array("Madeline", "Theo", "Badeline", "Mr. Oshiro", "Granny"),
	"Stardew Valley": new Array("Alex", "Elliot", "Harvey", "Sam", "Sebastian", "Shane", "Abigail", "Emily", "Haley", "Leah", "Maru", "Penny", "Caroline", "Cint", "Demetrius", "Dwarf", "Evelyn", "George", "Gus", "Jas", "Jodi", "Kent", "Krobus", "Leo", "Lewis", "Linus", "Marnie", "Pam", "Pierre", "Robin", "Sandy", "Vincent", "Willy", "Wizard", "Grandpa", "Mr. Qi"),
	"Hollow Knight": new Array("Charm Lover Salubra", "Iselda", "Millibelle the Banker", "Leg Eater", "Sly", "the Last Stag", "Relic Seeker Lemm", "Cloth", "Cornifer", "Hornet", "Mister Mushroom", "Quirrel", "Tiso", "Zote the Mighty", "Bretta", "Grubfather", "Seer", "Troupe Master Grimm", "Dung Defender", "Elderbug", "Eternal Emilitia", "Mask Maker", "Midwife", "Snail Shaman", "White Lady", "the Collector", "Brooding Mawlek", "Crystal Guardian", "Broken Vessel", "False Knight", "Flukemarm", "Gruz Mother", "God Tamer", "Hive Knight", "Hollow Knight", "the Mantis Lords", "Nosk", "Radiance", "Uumuu", "Soul Master", "Watcher Knight", "Elder Hu", "Galien", "Gorb", "Markoth", "Marmu", "No Eyes", "Xero", "Winged Nosk", "White Defender", "Soul Tyrant", "the Sisters of Battle", "Hornet Sentinel", "Lost Kin", "Nightmare King", "Pure Vessel", "Grey Prince Zote", "Failed Champion", "Enranged Guardian", "Absolute Radiance")
};

// When bot becomes active
client.once("ready", () => {
	console.log("*enters the barn*");
	//const channel = client.channels.cache.get(devChannel);
	//channel.send("*Enters the barn* I was updated! owo");

	// Set bot activity
	client.user.setActivity("my servants 🐐", { type: "WATCHING" });

	// Listen for commands
	const ignoreCommandChance = 0.05;
	commands(client, "ping", (message) => {
		message.channel.send("Pong!");
	})
	commands(client, "pingaling", (message) => {
		message.channel.send("Pongalong!");
	})
	commands(client, "invite", (message) => {
		message.channel.send(`Invite to <#798737214862655488> https://discord.gg/p8SF3ptm6d`);
	})
	commands(client, "whoop", (message) => {
		const commandAuthor = `<@${message.author.id}>`;

		if (Math.random() > ignoreCommandChance) {
			const outputs = [
				"[Backwards long jumps out of existence and crashes your game...]",
				"[Starts to go in, then backs out at last second...]",
				"[Stays sideways at entrance to barn so I don't even attempt to enter...]",
				"[Ignores your whoop...]",
				"[Randomly gets triggered and attacks you...]",
				"[Kicks you in the groin...]",
				"[Eats grass just to mock you...]",
				"[Sits down and grooms self...]",
				"[Faces the wrong way...]",
				"[Attempts to enter barn, but gets pushed out by other goats...]",
			];

			const goatInRng = Math.random();
			const goatInChance = 0.05;

			// If goat goes in
			if (goatInRng <= goatInChance) {
				message.channel.send(commandAuthor + " GOAT IN!");
			}
			// If goat is a Howard...
			else {
				const goatOutRng = Math.floor(Math.random() * outputs.length) + 1;
				message.channel.send(commandAuthor + " " + outputs[goatOutRng - 1]);
			}
		} else {
			message.channel.send(commandAuthor + " [Howard has ignored your command...] ");
			console.log(`hahaha get rekt ${message.author.tag}`);
		}
	})
	commands(client, "bff", (message) => {
		const commandAuthor = `<@${message.author.id}>`;

		if (Math.random() > ignoreCommandChance) {
			const keys = Object.keys(friends);
			const game = keys[Math.floor(Math.random() * keys.length)];
			const friend = friends[game][Math.floor(Math.random() * friends[game].length)];
			let output = "Your new best friend is **" + friend + "** from *" + game + "* !";
			if (game == "Legend of Zelda: Twilight Princess" && friend == "Howard") {
				output = "Your new best friend is -- **Howard**, myself?! W-why this is such an honor to be appreciated so much! 😳"
			}
			message.channel.send(commandAuthor + " " + output);
		} else {
			message.channel.send(commandAuthor + " [Howard has ignored your command...] ");
			console.log(`hahaha get rekt ${message.author.tag}`);
		}
	})
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

let streamAnnouncementMessage;
let currentGame;
// When a user's presence changes
client.on("presenceUpdate", (oldPresence, newPresence) => {
	// If not me, return
	if (newPresence.user.id != myUserId) return false;

	// Check each activity's type
	newPresence.activities.forEach(activity => {
		// If streaming
		if (activity.type == "STREAMING") {
			// If message has not been sent
			if (streamAnnouncementMessage == null) {
				// Send message
				const channel = client.channels.cache.get(streamAnnouncementsChannel);
				const output = `📺 **Chris is Awesome** is live on ${activity.name}! 📺\nHe is streaming **${activity.details}** at ${activity.url} <@&${twitchRoleId}>`;
				channel.send(output).then((message => {
					streamAnnouncementMessage = message;
				}))
				currentGame = activity.state;
				console.log("Started streaming '" + activity.details + "' playing '" + currentGame + "'. Announcement message was sent successfully.");
				return true;
			}
			// If message has been sent
			else {
				// If stream game is different from what was sent in original message
				if (activity.details != currentGame) {
					// Edit original message
					const output = `📺 **Chris is Awesome** is live on ${activity.name}! 📺\nHe is streaming **${activity.details}** at ${activity.url} <@&${twitchRoleId}>`;
					streamAnnouncementMessage.edit(output);
					currentGame = activity.state;
					console.log("Stream game changed to '" + currentGame + "' streaming '" + activity.details + "'. Announcement message was edited successfully.");
				}
			}
		}
		// If no longer streaming
		else if (streamAnnouncementMessage != null && streamAnnouncementMessage.content.startsWith("📺") && activity.type != "STREAMING") {
			// Edit original message
			output = ` ❌ Chris is Awesome has stopped streaming ❌\n`;
			output += "The VOD is available on Twitch until next week and will be on YouTube soon";
			streamAnnouncementMessage.edit(output);
			currentGame = "";
			streamAnnouncementMessage = null;
			console.log("Stream ended. Announcement message was edited successfully.");
		}
	})
})

// Login
client.login(process.env.DJS_TOKEN);