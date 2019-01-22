function StartPage() {
const player = new Plyr('#audio', {
        enabled: true,
	autoplay: true,
        publisherId: '962116583387701'
    });
player.source = {
        type: 'audio',
        title: 'MTM Radio',
        sources: [
                  {
                        src: sessionStorage.NPurl,
                        type: 'audio/mp3',
                        live: true,
                   },
                 ],
        };
const audio = document.getElementById('audio');
setTimeout(audio.play,3000);
}
setTimeout(StartPage, 5000);
