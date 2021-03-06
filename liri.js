//homework instructions said to put this
require("dotenv").config();
var SPOTIFY_API = require('./key.js');
//needed to use spotify npm
var Spotify = require('node-spotify-api');
//needed for reading and writing files
var fs = require("fs");
//required for bands in town
var request = require("request");

var spotify = new Spotify({
    id: SPOTIFY_API.ID,
    secret: SPOTIFY_API.SECRET
  });

//to take in command line
var command = process.argv[2];
var option = process.argv[3] || null;

//concert-this
function concertThisBand(option) {
    request ("https://rest.bandsintown.com/artists/" + option + "/events?app_id=codingbootcamp"), function(error, response, body) {
        if(error && response.statusCode === 200) {
            console.log("info: " + JSON.parse(body));
        }
    }
};

//spotify-this-song
function spotifyThisSong(query='The Sign ace of base'){

//from docs
spotify.search({ type: 'track', query: query, limit:1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log('Artists Name: ' + data.tracks.items[0].album.artists[0].name); 
  console.log('Song name: ' + data.tracks.items[0].name); 
  console.log('Album name: ' + data.tracks.items[0].album.name); 
  console.log('Preview link: ' + data.tracks.items[0].preview_url);
  
  });
}

//movie-this

function movieThis(option) {
    if (movieName = undefined) {
        movieName = "Mr. Nobody"
    }
    request("http://www.omdbapi.com/?t=" + option + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

  if (!error && response.statusCode === 200) {

    console.log("Movie title: " + JSON.parse(body).Title);
    console.log("Movie came out: " + JSON.parse(body).Year);
    console.log("IMDB rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten tomato rating: " + JSON.parse(body).Ratings[1].Value);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
  }
});
};

//do-what-it-says
function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return (error)
        }
        console.log(data);
        var dataArray = data.split(",");
    })
}

//This runs whole app

commandHandler(command, option);
function commandHandler(argvCommand, argvOption) {
    if (argvCommand === 'spotify-this-song') {
        if(argvOption) {
       spotifyThisSong(argvOption);
       return;
        }
        spotifyThisSong();
    }
    else if (argvCommand === 'concert-this') {
        if(argvOption) {
            concertThisBand(argvOption);
            return;
        }
        concertThisBand();
      
    }
    else if (argvCommand === 'movie-this') {
        if(argvOption) {
            movieThis(argvOption);
            return;
        }
        movieThis();
        
    }
    else if (argvCommand === 'do-what-it-says') {
        if(argvOption) {
            doWhatItSays(argvOption);
            return;
        }
        doWhatItSays();
    }
    else { 
        console.log('ERROR: you fucked up!')
    }
}