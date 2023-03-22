const express = require('express');
const youtube = require('./routes/youtube');

const server = express();
server.use(express.json());
server.use('/youtube', youtube);

module.exports = server;

if(require.main === module) {
    const port = process.env.SCRAPER || 1680;
    server.listen(port, () => {
        console.log(`Scraper listening on port:${port}`);
    });
}