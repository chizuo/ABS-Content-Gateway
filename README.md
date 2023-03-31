# A Better Subscription Service : Content Gateway

### Description
This is the Content API Gateway for the front end application: "[A Better Subscription Service](https://github.com/chizuo/ABS-Browser-App)"

### Route Details
`GET:<baseURL>/v1/youtube`
- expects a JSON object `{ url: <the_url_of_youtube_playlist> }`, example: `{ url: https://www.youtube.com/playlist?list=PLn3nHXu50t5xL2PoCoA0mDbKZDiR5XAyE }`
- returns a playlist object 
  - a content object : 

`PUT:<baseURL>/v1/youtube`
- expects a JSON object `{ url: <the_url_of_youtube_playlist>, contents: [<content object>]}`
- returns a list of contents
  - a list of contents contain content objects 

### Object Descriptions
- content object: `{ title: string, url: string, viewed: boolean }`
- playlist object: `{ playlist_title: string, plid: string, playlist_url: string, channel: string, channel_url: string, clicks: integer, contents: [<content objects>] }`