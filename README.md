# XCII - AGENT

> superagent "enhancer" for my needs

## Installation

```sh
❯ yarn add xcii-agent
```

## Usage

### api `get`

```js
async function get () {
  try {
    const response = await agent.get({'url': 'http://www.example.com'});

    console.log(response.text);
  } catch (e) {
    console.error(e);
  }
}

get();
```
