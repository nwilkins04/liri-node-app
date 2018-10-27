require("dotenv").config();

var spotify = require('spotify');

//concert-this

//spotify-this-song
function spotifyThisSong() {
    if (song === undefined) {
        song = "The Sign"
    };
};


spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
});

//movie-this

//do-what-it-says