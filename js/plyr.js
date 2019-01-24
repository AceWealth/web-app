function StartPage() {
const player = new Plyr('#audio', {
	autoplay: true,
	ads: {
	enabled: true,
        publisherId: '962116583387701'
	}
    });
player.source = {
        title: localStorage.NPChannel,
        sources: [
                  {
                        src: localStorage.NPurl,
                        type: 'audio/mp3',
                        live: true,
                   },
                 ],
        };
const audio = document.getElementById('audio');
setTimeout(audio.play,3000);
}
setTimeout(StartPage, 5000);
