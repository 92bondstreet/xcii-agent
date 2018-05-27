const agent = require('../');
const {format} = require('../');

async function get (url) {
  try {
    const response = await agent.get({url});

    console.log(response.text);
  } catch (e) {
    console.error(format.error(e));
  }
}

get('http://www.example.com');
get('http://www.example.com/not-found');
get('http://www.example.example');
