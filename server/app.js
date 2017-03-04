import express from 'express';
import config from '../config/env/config';
import assets from '../build/asset-manifest.json';

const port = config.port;
const app = express();
app.use(express.static('./build'));

app.use("*", (req, res) => {
  // This context object contains the results of the render
  const markup = `<html><head><meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Front-End Boilerplate</title>
        <link rel="stylesheet" href="/${assets['main.css']}"></head><body><div id="root"></div></body><script src="/${assets['main.js']}"></script></html>`;

  res.send(markup);
});


app.listen(port, (error) => {
  if (!error) {
    console.log(`App is up and running over port ${port}`);
  }
});

module.exports = app;
