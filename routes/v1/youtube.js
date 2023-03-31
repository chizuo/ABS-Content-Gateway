const router = require('express').Router();
const Youtube = require('../../features');

router.get('/', async(req,res) => {
    const url = req.body.url;
    const plid = url.substring((url.indexOf('=') + 1));
    try {
        const youtube = new Youtube(plid);
        const { playlist_title, channel, channel_url } = await youtube.getPlaylistInfo();
        const contents = await youtube.getPlaylistContent();
        res.status(200).json({ playlist_title: playlist_title, plid: plid, playlist_url: url, channel: channel, channel_url: channel_url, clicks: 0, contents: contents }); 
    } catch(err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
});

module.exports = router;