## About

A template repository using Discord.js to boostrap your Discord Bot with Node.js to use slash commands. This template provides the basic structure for building commands, and to get started with your users.

## Requirements
* Node.js Runtime
* NPM
* Discord Bot Token/ClientId

## Installation
Use the package manager NPM to install dependencies
```
npm install
```

Create a new .env file in the root project named either .dev.env or /.NODE_ENV.env -- note that NODE_ENV should be whatever your NODE_ENV you pass into the application is

```env
DISCORD_TOKEN=YOURDISCORDTOKENHERE
CLIENT_ID=YOURDISCORDCLIENTIDHERE
SHOULD_CREATE_COMMANDS=true
```
Note: should create commands tells the bot whether or not to create the discord slash commands. when rapidly developing, waiting for this call every bot startup can be cumbersome.

If the command shows up, you have succesfully setup the bot!

## Usage

To start the bot, run:

```
npm start
```

Add the bot to your Discord server with the link you can generate in the Discord Applications OAuth2 Panel.

Go into the server that your bot is in and type:

```
/ping
```


## Contributing

Pull requests are welcome! Please open an issue if you have any problems, or create a PR with your suggested changes.
