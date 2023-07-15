const express = require('express');
const app = express();

const port = process.env.SERVER_PORT || 3000; // Default port is 3000 if SERVER_PORT is not set

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
