const {STATUS} = require('./constants');

/**
 * Format reject message error
 * @param  {String} reason
 * @param  {Object} response - from superagent
 * @return {String}
 */
const what = module.exports.what = (reason, response) => {
  const splitMessage = response.message ? response.message.split('\n') : [response.error];
  const message = splitMessage[splitMessage.length - 1];
  const status = response.status || response.type || response.name;

  return `${reason} - ${status} - ${message}`;
};

/**
 * Format in raw, the superagent error
 * @param  {Object} error
 * @return {String}
 */
module.exports.error = error => {
  let message = what('UNTRACKED_ERROR', error);
  const {response} = error;

  if (error.status === 404) {
    message = 'PAGE_NOT_FOUND';
  } else if (response && ! STATUS.test(response.status)) {
    message = what('STATUS_4xx_5xx', response);
  }

  return message;
};
