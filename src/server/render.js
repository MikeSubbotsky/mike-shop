const React = require('react');
const { renderToPipeableStream } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const App = require('../client/App').default;

function handleRender(req, res) {
  const stream = renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
    {
      bootstrapScripts: ['/static/client.bundle.js'],
      onShellReady() {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(`<!DOCTYPE html><html><head><link rel="icon" type="image/x-icon" href="/favicon.ico"><title>Mike Shop</title><link rel="stylesheet" href="/static/index.css"></head><body><div id="root">`);
        stream.pipe(res, { end: false });
      },
      onShellError(err) {
        res.statusCode = 500;
        res.send('<!DOCTYPE html><html><body><h1>Error</h1></body></html>');
        console.error(err);
      },
      onAllReady() {
        res.write(`</div></body></html>`);
        res.end();
      }
    }
  );
}

module.exports = handleRender;
