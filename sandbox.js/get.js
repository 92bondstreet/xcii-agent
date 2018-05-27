const agent = require('../');

async function get () {
  try {
    const response = await agent.get({'url': 'http://www.example.com'});

    console.log(response.text);
  } catch (e) {
    console.error(e);
  }
}

get();
