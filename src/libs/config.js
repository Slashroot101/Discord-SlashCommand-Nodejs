const dotenv = require('dotenv');

dotenv.config({ path: `${process.cwd()}/.${process.env.NODE_ENV.replace(' ', '')}.env`});

module.exports = {
  discordToken: process.env.DISCORD_TOKEN,
  discordClientId: process.env.DISCORD_CLIENT_ID,
  shouldCreateCommands: process.env.SHOULD_CREATE_COMMANDS === 'true',
};