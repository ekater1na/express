const express = require('express');
const inject = require('require-all');

const app = express();
const router = express.Router;
const port = 3000;

try {
  const controllers = inject(`${__dirname}/controllers`);

  for (const name in controllers) {
    app.use(`/${name}`, controllers[name]({ router }));
  }
} catch (e) {
  console.error(e);
}

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
