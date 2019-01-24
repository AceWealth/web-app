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
            if (sessionStorage.NPYouTube === "null") {
                if (sessionStorage.NPSoundCloud === "null") {
                        window.open(search, '_blank');
                } else {
                window.open(sessionStorage.SoundCloud, '_blank');
                }
            } else {
                window.open(sessionStorage.NPYouTube, '_blank');
            }
    } else {
        window.open(sessionStorage.NPSpotify, '_blank');
    		}
	});
}
