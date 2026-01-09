# `git clone https://github.com/codump/discord.js-v14-dashboard-api-bot-hosting.net`
A basic bot with a dashboard website and API on Bot-Hosting.net

> [!CAUTION]
> Still in development.

For local installation execute `npm install`. Then rename empty-config.json to config.json and fill in the details. To run it on local use `npm start`.

Slash command on discord `/botserver` -> action

Returning Error: 401 means the botServerId and/or botServerApiKey in the config are incorrect.

## Dependancies
- Discord.js v14
- Express
- Nodemon (for local start)