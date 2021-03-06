/* eslint-disable no-undef */
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const PORT = 3000
// Setup
const app = express();
//const port = process.env['WEB_APP_PORT'];
const port = process.env['WEB_APP_PORT'] || PORT;
const config = require('./webpack.config.dev.js');
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: "/",
  serverSideRender: true,
  watchOptions: {
    // Due to iOS devices memory constraints
    // disabling file watching is recommended 
    //ignored: /.*/
  }
});
app.use(middleware);
app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

// Launch app
app.listen(port, () => {
  console.log(
    'Launching app... http://localhost:' + port + '\n'
  );
});

// Register app and middleware. Required for better
// performance when running from play.js

// eslint-disable-next-line no-empty
try { pjs.register(app, middleware); } catch (error) { }
