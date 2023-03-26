const express = require('express');
const youtube = require('./routes/v1/youtube');
const YouTube = require('./routes/v2/youtube');

const server = express();
server.use(express.json());
server.use('/v1/youtube', youtube);
server.use('/v2/youtube', YouTube);

module.exports = server;

if(require.main === module) {
    const port = process.env.SCRAPER || 1231;
    server.listen(port, () => {
        console.log(`Scraper listening on port:${port}`);
    });
}