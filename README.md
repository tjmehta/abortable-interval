# abortable-interval

abortable interval via abort signals

# Installation

```sh
npm i --save abortable-interval
```

# Usage

#### Supports both ESM and CommonJS

```js
// esm
import interval from 'abortable-interval'
// commonjs
const interval = require('abortable-interval').default
```

#### Example

```js
import interval from 'abortable-interval'

const controller = new AbortController()
const signal = controller.signal

interval(1000, signal, () => {
  console.log('interval', Date.now())
})

controller.abort() // clears interval
```

# License

MIT
