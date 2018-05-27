/**
 * Find a variable into script
 * @param  {String} variable
 * @param  {String} script
 * @return {String}
 */
module.exports = (variable, script) => {
  const content = script.trim().replace(/&#{0,1}[a-z0-9]+;/ig, '');
  const matches = content.substring(content.search(variable.replace('=', '')) + variable.length, content.length);
  const clean = matches.replace('=', '');
  const semicolon = clean.search(';');

  if (semicolon > 0) {
    return clean.substring(0, semicolon);
  }

  return clean;
};
