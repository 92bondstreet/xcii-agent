const cheerio = require('cheerio');

/**
 * Get data site-key if protected by captacha recaptcha
 * @param  {Object} body
 * @return {String}
 */
module.exports = body => {
  const $ = cheerio.load(body);

  return $('.g-recaptcha').attr('data-sitekey');
};
