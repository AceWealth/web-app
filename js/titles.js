var nowPlaying;
var title_count = 25;
var artist_count = 50;
var nowPlaying = new Vue({
        data: {"np":{"now_playing":{"song":{"title":"Song Title","artist":"Song Artist","channel":"Channel Name","art":"\/static\/img\/generic_song.jpg"},"is_request":false,"elapsed":0,"duration":0}}},
    });

function determineChannel() {
if (document.getElementById('artist').innerHTML == "MTM Radio") {
    sessionStorage.NPAPIurl = 'https://mtmrad.io/api/nowplaying/1';
    } else
if (document.getElementById('artist').innerHTML == "UVC Radio") {
    sessionStorage.NPAPIurl = 'https://mtmrad.io/api/nowplaying/2';
    }
}

function loadNowPlaying() {
        determineChannel()
        $.getJSON(sessionStorage.NPAPIurl, function(row) {
            nowPlaying.np = row;

            if ('mediaSession' in navigator) {
                navigator.mediaSession.metadata = new MediaMetadata({
                    title: row.now_playing.song.title,
                    artist: row.now_playing.song.artist,
                    channel: row.station.name,
                    elapsed: row.now_playing.elapsed,
                    duration: row.now_playing.duration,
                    soundcloud_http: row.now_playing.song.custom_fields.soundcloud_http,
                    artwork: [
                        { src: row.now_playing.song.art }
                    ]
                });
            }

var mediaTitle = row.now_playing.song.title;
var mediaArtist = row.now_playing.song.artist;
var mediaArt = row.now_playing.song.art;
var mediaDuration= row.now_playing.duration;
var mediaElapsed = row.now_playing.elapsed

var mediaSCLink = row.now_playing.song.custom_fields.soundcloud_http
var mediaSPLink = row.now_playing.song.custom_fields.spotify_http
var mediaYTLink = row.now_playing.song.custom_fields.youtube_http

if (sessionStorage.NPArtist == mediaArtist) {
// console.log('Skipping...');
	} else {
sessionStorage.NPArtist = mediaArtist;
}
if (sessionStorage.NPTitle == mediaTitle) {
// console.log('Skipping...');
	} else {
sessionStorage.NPTitle = mediaTitle;
}
if (sessionStorage.NPArt == mediaArt) {
// console.log('Skipping...');
	} else {
sessionStorage.NPArt = mediaArt;
}

sessionStorage.NPSoundCloud = mediaSCLink;
sessionStorage.NPSpotify = mediaSPLink;
sessionStorage.NPYouTube = mediaYTLink;

var q = sessionStorage.NPTitle + " - " + sessionStorage.NPArtist;

// document.title = "MTM Radio | " + q;

$("#cover_art").attr("style", "background-image: " + "url(" + mediaArt + ");");

if (mediaTitle.length > title_count) {
    $("#title").html('<marquee scrollamount=2>' + mediaTitle + '</marquee>');
        } else {
    $("#title").html(mediaTitle);
}

if (mediaArtist.length > artist_count) {
    $("#artist").html('<marquee scrollamount=2>' + mediaArtist + '</marquee>');
        } else {
    $("#artist").html(mediaArtist);
}

    }).fail(function() {
        fail;
    });
}
function Setup() {
    setInterval(loadNowPlaying, 15000);
}
setTimeout(Setup, 5000);
