const { google } = require('googleapis');
const express = require('express');
const router = express.Router();
const api_key = "AIzaSyDhbgJVVO5c14Agm1tkQVBu3wUxk5VmILs";

router.get('/', async(req,res) => {
    const url = req.body.url;
    const plid = url.substring((url.indexOf('=') + 1));
    const playlist = [];
    const youtube = google.youtube({ version:'v3', auth:api_key });
    try {
        const playlistInfo = await youtube.playlists.list({ part:'snippet', id:plid });
        const videos = await youtube.playlistItems.list({ part:'snippet', playlistId:plid, maxResults: 50});
        for(let i = 0; i < videos.data.items.length; i++) {
            let video = {
                title: videos.data.items[i].snippet.title,
                url: `https://www.youtube.com/watch?v=${videos.data.items[i].snippet.resourceId.videoId}`,
                watched: false
            }
            playlist.push(video);
        }
        res.status(200).json({ playlist_title: playlistInfo.data.items[0].snippet.title, plid: plid, videos: playlist }); 
    } catch(err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
});

module.exports = router;