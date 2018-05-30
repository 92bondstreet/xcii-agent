const request = require('superagent');
const solvecf = require('./cloudflare');
const format = require('./format');

const {STATUS, TIMEOUT} = require('./constants');

require('superagent-proxy')(request);

/**
 * Post with superagent
 * @param  {Object} configuration
 * @param  {Object} [headers={}]
 * @return {Promise}
 */
module.exports.post = (configuration, headers = {}) => {
  const {payload = {}, product, proxy, url} = configuration;
  let rqst;

  return new Promise(async (resolve, reject) => {
    const timer = setTimeout(() => {
      rqst.abort();
      reject('STRICT_TIMEOUT');
    }, TIMEOUT);

    rqst = request.agent()
      .post(url)
      .send(payload)
      .set(headers)
      .timeout(TIMEOUT);

    if (proxy) {
      rqst = rqst.proxy(`http://${proxy}`);
    }

    try {
      const res = await rqst;

      clearTimeout(timer);

      if (! STATUS.test(res.status)) {
        return reject(format.what('STATUS_4xx_5xx', res));
      }

      return resolve(res);
    } catch (err) {
      clearTimeout(timer);
      const {response} = err;

      // we need to solve the cloudflare challenge
      if (err.status === 503 && response.headers.server && response.headers.server.includes('cloudflare')) {
        try {
          const soluce = await solvecf(product, response.text);

          return resolve(soluce);
        } catch (e) {
          return reject(e);
        }
      }

      return reject(err);
    }
  });
};

/**
 * Get with superagent
 * @param  {Object} configuration
 * @param  {Object} [headers={}]
 * @return {Promise}
 */
module.exports.get = (configuration, headers = {}) => {
  const {queries = {}, product, proxy, url} = configuration;
  let rqst;

  return new Promise(async (resolve, reject) => {
    const timer = setTimeout(() => {
      rqst.abort();
      reject('STRICT_TIMEOUT');
    }, TIMEOUT);

    rqst = request.agent()
      .get(url)
      .query(queries)
      .set(headers)
      .timeout(TIMEOUT);

    if (proxy) {
      rqst = rqst.proxy(`http://${proxy}`);
    }

    try {
      const res = await rqst;

      clearTimeout(timer);

      if (! STATUS.test(res.status)) {
        return reject(format.what('STATUS_4xx_5xx', res));
      }

      return resolve(res);
    } catch (err) {
      clearTimeout(timer);
      const {response} = err;

      // we need to solve the cloudflare challenge
      if (err.status === 503 && response.headers.server && response.headers.server.includes('cloudflare')) {
        try {
          const soluce = await solvecf(product, response.text);

          return resolve(soluce);
        } catch (e) {
          return reject(e);
        }
      }

      return reject(err);
    }
  });
};
