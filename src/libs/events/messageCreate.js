const logger = require("../logger");

module.exports = (e) => {
    logger.info(`MessageCreate interaction for user [discordSnowflake=${e.author.id}]`);

    if(e.author.bot === true) return;
};