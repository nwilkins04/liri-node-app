//homework instructions said to put this
require("dotenv").config();
var SPOTIFY_API = require('./key.js');
//needed to use spotify npm
var Spotify = require('node-spotify-api');
//needed for reading and writing files
var fs = require("fs");

var spotify = new Spotify({
    id: SPOTIFY_API.ID,
    secret: SPOTIFY_API.SECRET
  });

//to read key.js file
// fs.readFile("key.js", "utf8", function(error, data) {
//     if(error) {
//         return console.log(error)
//     }
// })

//concert-this

//spotify-this-song

//spotify search from docs
// search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);
// function spotifyThisSong() {
//     if (song === undefined) {
//         song = "The Sign"
//     };
// };
function spotifyThisSong(query='The Sign ace of base'){

//from docs
spotify.search({ type: 'track', query: query, limit:1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log('Artists Name: ' + data.tracks.items[0].album.artists[0].name); 
  console.log('Song name: ' + data.tracks.items[0].name); 
  console.log('Album name: ' + data.tracks.items[0].album.name); 
  console.log('Popularity: ' + data.tracks.items[0].popularity); 
  
  });
}
//This runs whole app
var command = process.argv[2];
var option = process.argv[3] || null;
commandHandler(command, option);
function commandHandler(argvCommand, argvOption) {
    if (argvCommand === 'spotify-this-song') {
        if(argvOption) {
       spotifyThisSong(argvOption);
       return;
        }
        spotifyThisSong();
    }
    else if (argvCommand === 'deposit') {
        console.log('display deposit')
      
    }
    else if (argvCommand === 'withdrawl') {
        console.log('display withdrawl')
        
    }
    else if (argvCommand === 'lotto') {
        console.log('display lotto')
    }
    else { 
        console.log('ERROR: enter either total, deposit, withdral, or lotto to contine')
    }
}

//movie-this

//do-what-it-says