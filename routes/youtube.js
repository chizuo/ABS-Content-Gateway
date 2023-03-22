const youtube = require('usetube');
const express = require('express');
const router = express.Router();

router.get('/', async(req,res) => {
    const url = req.body.url;
    const plid = url.substring((url.indexOf('=') + 1));
    const playlist = [];
    try {
        const videos = await youtube.getPlaylistVideos(plid);
        for(let i = 0; i < videos.length; i++) {
            let video = {
                title: videos[i].original_title,
                url: `https://www.youtube.com/watch?v=${videos[i].id}`
            }
            playlist.push(video);
        }
        res.status(200).json({playlist:playlist});
    } catch(err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
});

module.exports = router;