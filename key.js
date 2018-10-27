var Spotify = new Spotify(keys.spotify);

//needed for reading and writing files
var fs = require("fs");

console.log('this is loaded');

exports.Spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
}