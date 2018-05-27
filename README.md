# XCII - AGENT

> superagent "enhancer" for my needs

![Photo by Stefan Steinbauer](https://source.unsplash.com/HK8IoD-5zpg/800x600)

## Installation

```sh
❯ yarn add git+ssh://git@github.com/92bondstreet/xcii-agent.git
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

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright)
