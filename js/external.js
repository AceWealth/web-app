function setExternalLinks() {
$("#cover_art").dblclick(function(){
	var qt = sessionStorage.NPTitle;
	var qa = sessionStorage.NPArtist;
	var q = qt + " - " + qa;
	var eq = encodeURI(q);

	var search = 'https://soundcloud.com/search/sounds?q=' + '"' + q + '"';
	sessionStorage.SearchURI = search;

console.log('Opening link for: ' + qt);
if (sessionStorage.NPSpotify === "null") {
    console.log('No Spotify link found, trying YouTube...');
            if (sessionStorage.NPYouTube === "null") {
                console.log('No YouTube link found, trying SoundCloud...');
                if (sessionStorage.NPSoundCloud === "null") {
                        console.log('No SoundCloud link found, using Search...');
                        window.open(search, '_blank');
                } else {
		console.log('Opening SoundCloud Link');
                window.open(sessionStorage.SoundCloud, '_blank');
                }
            } else {
		console.log('Opening YouTube Link');
                window.open(sessionStorage.NPYouTube, '_blank');
            }
    } else {
	console.log('Opening Spotify Link');
        window.open(sessionStorage.NPSpotify, '_blank');
    		}
	});
}
