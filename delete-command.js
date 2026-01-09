const { REST, Routes } = require('discord.js')
const { botClientId, botToken } = require('./config.json')

const rest = new REST({ version: '10' })
// `setToken` existed on older REST implementations; some builds expose a different API.
// Use the method if available, otherwise fall back to assigning `token` for compatibility.
if (typeof rest.setToken === 'function') {
	rest.setToken(botToken)
} else {
	rest.token = botToken
}

/* CHANGE commandId -> To delete a specific command, you will need its id. Head to Server Settings -> Integrations -> Bots and Apps and choose your bot. Then, right click a command and click Copy ID. */

/* for guild-based commands
rest.delete(Routes.applicationGuildCommand(botClientId, guildId, 'commandId'))
	.then(() => console.log('Successfully deleted guild command'))
	.catch(console.error)
*/

// for global commands
rest.delete(Routes.applicationCommand(botClientId, 'commandId'))
	.then(() => console.log('Successfully deleted application command'))
	.catch(console.error)