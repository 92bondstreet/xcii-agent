const randomUseragent = require('random-useragent');

const RANDOM_USER_AGENT = module.exports.RANDOM_USER_AGENT = randomUseragent.getRandom(ua => ua.osName === 'Mac OS' && ua.browserName === 'Chrome' && parseFloat(ua.browserVersion) >= 50);

module.exports.STATUS = /^[2-3][0-9][0-9]$/;
module.exports.TIMEOUT = 60000;
module.exports.HEADERS = {
  'Accept-Language': 'fr-FR,fr;q=0.8,en-US;q=0.6,en;q=0.4,de;q=0.2',
  'Cache-Control': 'no-cache',
  'Connection': 'keep-alive',
  'User-Agent': RANDOM_USER_AGENT,
  'Pragma': 'no-cache',
  'upgrade-insecure-requests': 1
};
