```js
const logger = require('silly-logging-middleware')
const app = express()

app.use(logger)
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

## Installation

```bash
$ npm install silly-logging-middleware
```