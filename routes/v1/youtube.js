const router = require('express').Router();
const Youtube = require('../../features');

router.post('/', async(req,res) => {
    try {
        const url = req.body.url;
        const plid = url.substring((url.indexOf('=') + 1));
        const youtube = new Youtube(plid);
        const { playlist_title, channel, channel_url } = await youtube.getPlaylistInfo();
        const contents = await youtube.getPlaylistContent();
        res.status(200).json({ playlist_title: playlist_title, plid: plid, playlist_url: url, channel: channel, channel_url: channel_url, clicks: 0, contents: contents }); 
    } catch(err) {
        res.status(501).send(err.message);
    }
});

router.put('/', async(req,res) => {
    try {
        if(req.body.contents === undefined) throw new Error("missing contents list");
        const youtube = new Youtube(req.body.plid);
        const new_contents = await youtube.checkNew(req.body.contents);
        if(new_contents.length > 0) res.status(200).json(new_contents);
        else res.status(204).send();
    } catch(err) {
        res.status(501).send(err.message);
    }
});

module.exports = router;