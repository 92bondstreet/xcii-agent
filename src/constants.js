const ua = require('./ua');

module.exports.STATUS = /^[2-3][0-9][0-9]$/;
module.exports.TIMEOUT = 60000;
module.exports.HEADERS = {
  'Accept-Language': 'fr-FR,fr;q=0.8,en-US;q=0.6,en;q=0.4,de;q=0.2',
  'Cache-Control': 'no-cache',
  'Connection': 'keep-alive',
  'User-Agent': ua,
  'Pragma': 'no-cache',
  'upgrade-insecure-requests': 1
};
