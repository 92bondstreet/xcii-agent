/**
 * convert cookies array from headless browser format to a string-ready for superagent
 * @param  {Array} cookies
 * @return {String}
 */
module.exports.toString = cookies => {
  return cookies.reduce((current, cookie) => {
    current += `${cookie.name}=${cookie.value}; `;

    return current;
  }, '');
};

/**
 * Get cookies object from superagent headers response in array format
 * @param  {Object} headers
 * @return {Array}
 */
module.exports.toArray = headers => {
  const cookie = headers['set-cookie'];
  const cookies = cookie && cookie
    .map(item => item.split(';')[0])
    .map(item => {
      const [name, value] = item.split('=');

      return {name, value};
    });

  return cookies || [];
};
