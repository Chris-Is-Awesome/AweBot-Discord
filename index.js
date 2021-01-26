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
	"Stardew Valley": new Array("Alex", "Elliot", "Harvey", "Sam", "Sebastian", "Shane", "Abigail", "Emily", "Haley", "Leah", "Maru", "Penny", "Caroline", "Cint", "Demetrius", "Dwarf", "Evelyn", "George", "Gus", "Jas", "Jodi", "Kent", "Krobus", "Leo", "Lewis", "Linus", "Marnie", "Pam", "Pierre", "Robin", "Sandy", "Vincent", "Willy", "Wizard", "Grandpa", "Mr. Qi")

	/*
	"The Legend of Zelda: Ocarina of Time": new Array("Gohma", "King Dodongo", "Barinade", "Phantom Ganon", "Volvagia", "Morpha", "Bongo Bongo", "Dark Link", "Dead Hand", "Twinrova", "Ganondorf", "Ganon", "Epona", "the Great Fairy", "Impa", "Link", "Navi", "Pierre", "Zelda", "Rauru", "the Running Man", "Sheik", "the Deku Tree", "Fado", "Mido", "Saria", "Skull Kid", "the Happy Mask Salesman", "the Poe Collector", "Ingo", "Malon", "Talon", "Dampé", "the Bean Guy", "King Zora", "Lord Jabu-Jabu", "Princess Ruto", "Biggoron", "Nabooru", "Kotake", "Koume"),
	"The Legend of Zelda: Majora's Mask": new Array("Captain Keeta", "Wart", "Igos du Ikana", "Garo Master", "Odolwa", "Goht", "Gyorg", "Twinmold", "Majora's Mask", "Majora's Incarnation", "Majora's Wrath", "Link", "Kaepora Gaebora", "Skull Kid", "Zora Link", "Cermia", "Deku Link", "Epona", "Fiercy Deity Link", "Goron Link", "Tingle", "Tatl", "Tael", "Keaton", "Anju", "the Happy Mask Salesman", "Kafei", "Pierre", "the Bean Guy", "Kotake", "Koume", "Mikau", "Garo", "the Poe Collector", "Dampé"),
	"The Legend of Zelda: The Wind Waker": new Array("Gohma", "Kalle Demos", "Gohdan", "Helmaroc King", "Jalhalla", "Molgera", "Puppet Ganon", "Ganondorf", "Phantom Ganon", "Mothula", "Beedle", "Cyclos", "Daphnes Nohansen Hyrule", "Fado", "the  Queen of Fairies", "Fishmen", "Gonzo", "the Great Fairy", "Laruto", "Link", "Zelda", "Senza", "Tetra", "Zephos", "Zuko", "Mako", "Niko", "Aryll", "Jabun", "Orca", "Grandma", "Anton", "Kamo", "Kreeb", "Lenzo", "Linda", "Maggie", "Mila", "Garrickson", "Salvatore", "Minenco", "Tott", "Zunari", "Hoskit", "Baito", "Valoo", "Carlov", "Makar", "Manny", "the Deku Tree", "Ankle", "Knuckle", "David Jr.", "Tingle", "Komali", "Medli", "Quill", "Mrs. Marie", "the King of Red Lions", "Sue-Belle"),
	"The Legend of Zelda: Twilight Princess": new Array("Ook", "King Bulblin", "Dangoro", "Twilit Bloat", "Deku Toad", "Skull Kid", "Death Sword", "Darkhammer", "Phantom Zant", "Diababa", "Fyrus", "Morpheel", "Stallord", "Blizzeta", "Armogohma", "Argorok", "Zant", "Puppet Zelda", "Ganon", "Ganondorf", "Epona", "the Great Fairy", "Hero's Shade", "Impaz", "Link", "Midna", "Ooccoo", "the Postman", "Beth", "Colin", "Fado", "Hanch", "Ilia", "Jaggle", "Malo", "Mayor Bo", "Ordona", "Pergie", "Rusl", "Sera", "Talo", "Uli", "Coro", "Faron", "Eldin", "Trill", "Plumm", "Barnes", "Luda", "Renado", "Shad", "Darbus", "Gor Amoto", "Gor Coron", "Gor Ebizo (sva)", "Gor Liggs", "Fyer", "Auru", "Falbi", "Lanayru", "Hena", "Iza", "Purdy", "Prince Ralis", "Rutela", "Agitha", "Charlo", "Chudley", "Dr. Borville", "Gengle", "Hannah", "Jovani", "Kili", "Louise", "Madame Fanadi", "Misha", "Zelda", "Purlo", "Soal", "Telma", "Ashei", "Yeta", "Yeto"),
	"The Legend of Zelda: Phantom Hourglass": new Array("Blaaz", "Cyclok", "Crayk", "Dongorongo", "Gleeok", "Eox", "Bellum", "Bellumbeck", "Link", "Tetra", "Oshus", "Linebeck", "Ciela", "Leaf", "Neri", "Astrid", "Biggoron", "Beedle", "Postman", "Salvatore", "Jolene"),
	"The Legend of Zelda: Spirit Tracks": new Array("Mothula", "Dark Link", "Stagnox", "Fraaz", "Phytops", "Cragma", "Byrne", "Skeldritch", "Cole", "Malladus", "Link", "Zelda", "Beedle", "Rael", "Anjean", "Postman", "Ferrus", "Alfonzo", "Niko", "Linebeck III", "Joynas", "Bunnio", "Honcho"),
	"The Legend of Zelda: Skyward Sword": new Array("Ghirahim", "Scaldera", "Moldarach", "the Imprisoned", "Koloktos", "Tentalus", "Levias", "Demise", "Fi", "Link", "Zelda", "Impa", "Groose", "Beedle", "Levias", "Strich", "Cawlin", "Batreaux", "Fledge", "Gaepora", "Horwell", "Oawlan", "LD-301S Scrapper", "Kina", "Dodoh", "Bucha", "Erla", "Lopsa", "Machi", "Oolo", "Yerbal", "Eldin", "Faron", "Lanayru"),
	"The Legend of Zelda: A Link Between Worlds": new Array("Yuga", "Moldorm", "Margomill", "Gemesaur King", "Arrghus", "Knucklemaster", "Stalblind", "Zaganaga", "Dharkstare", "Grinexx", "Yuga Ganon", "Shadow Link", "Gramps", "Dampe", "Gulley", "Seres", "Osfala", "Irene", "Oren", "Rosso", "Impa", "Ravio", "Hilda", "Zelda", "Link", "Blacksmith", "Sahasrahla", "Mother Maiamai", "Thief Girl", "the Great Fairy"),
	"The Legend of Zelda: Triforce Heros": new Array("Margoma", "Arrghus", "Moldorm", "Blizzagia", "Stalchampion", "Prismantus", "Lady Maud", "Freezlord", "Gigaleon", "Grim Repoe", "Link", "Lady Maud", "Princess Styla", "the Great Tripini"),
	"The Legend of Zelda: Breath of the Wild": new Array("Hinox", "Talus", "Molduga", "Stalnox", "Windblight Ganon", "Fireblight Ganon", "Thunderblight Ganon", "Ganon", "Calamity Ganon", "Waterblight Ganon", "Urbosa", "Zelda", "Link", "Mipha", "Revali", "Daruk", "Kilton", "Kass", "Epona", "Hetsu", "King Rhoam", "Robbie", "Yunobo", "the Deku Tree", "the Great Fairy", "Riju", "Master Kohga", "Sidon", "Impa", "Paya", "Beedle"),
	"Hyrule Warriors": new Array("King Dodongo", "Gohma", "Manhandla", "Argorok", "Ganon", "Melmaroc King", "Phantom Ganon", "the Imprisoned", "Link", "Impa", "Sheik", "Lana", "Zelda", "Ganondorf", "Darunia", "Ruto", "Agitha", "Midna", "Zant", "Fi", "Ghirahim", "Cia", "Volga", "Wizzro", "Twili Midna", "Young Link", "Tingle", "Cucco", "Linkle", "Skull Kid", "Toon Link", "Tetra", "King Daphnes", "Medli", "Marin", "Toon Zelda", "Ravio", "Yuga", "the Great Fairy", "Proxi"),
	"Hyrule Warriors: Age of Calamity": new Array("Link", "Impa", "Zelda", "Mipha", "Daruk", "Revali", "Urbosa", "Hestu", "the Great Fairy", "Monk Maz Koshia", "Sidon", "Yunobo", "Teba", "Riju", "Master Kohga", "King Rhoam", "Terrako", "Calamity Ganon"),
	"The Witcher 3": new Array("Geralt of Rivia", "Keira Metz", "Vesemir", "Dandelion", "Ciri of Cintra", "Yennefer of Vengerberg", "Eskel", "Triss Merigold", "Gaunter O'Dimm", "Eredin", "Dijkstra"),
	"Ittle Dew": new Array("Ittle Dew", "Apathetic Frog", "Brutus", "Chilly Roger", "Crystal", "Lean Boo", "Jenny Frog", "Old Man", "Masked Ruby", "Pancake", "Petal Slug", "Fishbun", "FlopFlop", "Gate", "Lichious Turnip", "Itan Carver", "Jenny Deer", "Jenny Fox", "Volcano", "Ultra Fishbunjin 3000", "Turnip", "Titan", "Tippsie", "Jenny Tiger", "Jenny Bird"),
	"Ittle Dew 2": new Array("Ittle Dew", "Tippsie", "Cowbun", "Cyber Jenny", "Construct Marina", "Dream Rock", "Magic Crystal", "Jenny Lemon", "Jenny Flower", "Jenny Shark", "Safety Jenny", "Slayer Jenny", "Hyperdusa", "Jenny Berry", "Jenny Bun", "Jenny Cat"),
	*/
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
					console.log("Stream started, announcement message was sent.");
					return true;
				}
				else // Edit message
				{
					// If stream title changes
					if (activity.details != streamTitle) {
						const output = `📺 **Chris is Awesome** is now live on ${activity.name}! 📺\nHe is streaming **${activity.details}** at ${activity.url} <@&${twitchRoleId}>`;
						streamAnnouncementMessage.edit(output);
						console.log("Stream title updated, announcement message was edited.");
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
		console.log("Stream ended, announcement message was edited.")
	}
})

// Login
client.login(process.env.DJS_TOKEN);