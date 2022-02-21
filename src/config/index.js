const dotenv = require('dotenv');

dotenv.config({path: `${process.cwd()}/.${process.env.NODE_ENV.replace(" ", '')}.env`});

module.exports = {
    discordToken: process.env.DISCORD_TOKEN,
    clientId: process.env.CLIENT_ID,
};