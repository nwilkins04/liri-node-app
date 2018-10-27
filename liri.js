//homework instructions said to put this
require("dotenv").config();

//needed to use spotify npm
var spotify = require('node-spotify-api');
//needed for reading and writing files
var fs = require("fs");

//to read key.js file
fs.readFile("key.js", "utf8", function(error, data) {
    if(error) {
        return console.log(error)
    }
})

//concert-this

//spotify-this-song
function spotifyThisSong() {
    if (song === undefined) {
        song = "The Sign"
    };
};

//from docs
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });

//movie-this

//do-what-it-says