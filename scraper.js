const express = require('express');
const routes = require('./routes');

const server = express();
server.use(express.json());
server.use('/', routes);

module.exports = server;

if(require.main === module) {
    const port = process.env.SCRAPER || 1231;
    server.listen(port, () => {
        console.log(`Scraper listening on port:${port}`);
    });
}