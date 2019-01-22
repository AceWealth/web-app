function WebPlayer_sweendawg() {
// COMPONENTS
$("div").remove(".Player");
// Player
var Player = React.createClass({ displayName: "Player",
	getInitialState: function getInitialState() {
		return {
			playStatus: 'play',
			currentTime: 0 };
	},
	getDefaultProps: function getDefaultProps() {
		return {
			track: {
				name: "Track Name",
				artist: "DJ Sweendawg",
				album: "Sweendawg Radio",	 
				year: 2018,
				artwork: "https://mtmrad.io/beta/web-player/img/covers/sweendawg.jpg",
				duration: 0,
				source: "http://mtmrad.io:8000/sweendawg"
				},
			};
	},
	updateTime: function updateTime(timestamp) {
		timestamp = Math.floor(timestamp);
		this.setState({ currentTime: timestamp });
	},
	updateScrubber: function updateScrubber(percent) {
		// Set scrubber width
		var innerScrubber = document.querySelector('.Scrubber-Progress');
		// innerScrubber.style['width'] = percent;
	},
	togglePlay: function togglePlay() {
		var status = this.state.playStatus;
		var audio = document.getElementById('audio');
		if (status === 'play') {
			status = 'pause';
			audio.play();
			var that = this;
			setInterval(function () {
				var currentTime = audio.currentTime;
				var duration = that.props.track.duration;

				// Calculate percent of song
				var percent = currentTime / duration * 100 + '%';
				// that.updateScrubber(percent);
				that.updateTime(currentTime);
			}, 100);
		} else {
			status = 'play';
			audio.pause();
		}
		this.setState({ playStatus: status });

	},
	render: function render() {
		return (
				React.createElement("div", { className: "Player" },
				React.createElement("div", { className: "Background", style: { 'backgroundImage': 'url(' + this.props.track.artwork + ')' } }),
				React.createElement("div", { className: "Header" },
				React.createElement("div", { className: "Title" }, "MTM | Now playing")),
				React.createElement("div", { className: "Artwork cover_art station_art", id: "cover_art", style: { 'backgroundImage': 'url(' + this.props.track.artwork + ')' } }),
				React.createElement(TrackInformation, { track: this.props.track }),
				React.createElement(Scrubber, null),
				React.createElement(Controls, { isPlaying: this.state.playStatus, onClick: this.togglePlay }),
				React.createElement(Timestamps, { duration: this.props.track.duration, currentTime: this.state.currentTime }),
				React.createElement("audio", { id: "audio" },
				React.createElement("source", { src: this.props.track.source }))));
	} });

	
var TrackInformation = React.createClass({ displayName: "TrackInformation",
	render: function render() {
		return (
				React.createElement("div", { className: "TrackInformation" },
				React.createElement("div", { className: "Name", id: "Track" }, this.props.track.name),
				React.createElement("div", { className: "Artist", id: "Artist" }, this.props.track.artist),
				React.createElement("div", { className: "Album" }, this.props.track.album, " (", this.props.track.year, ")")));


	} });


var Scrubber = React.createClass({ displayName: "Scrubber",
	render: function render() {
		return (
			React.createElement("div", { className: "Scrubber" },
				React.createElement("div", { className: "Scrubber-Progress" })));
	} });


var Controls = React.createClass({ displayName: "Controls",
	render: function render() {

		var classNames = void 0;
		if (this.props.isPlaying == 'pause') {
			classNames = 'fa fa-fw fa-pause';
		} else {
			classNames = 'fa fa-fw fa-play';
		}

		return (
			React.createElement("div", { className: "Controls" },
				React.createElement("div", { onClick: this.props.onClick, className: "Button" },
					React.createElement("i", { className: classNames }))));



	} });


var Timestamps = React.createClass({ displayName: "Timestamps",
	convertTime: function convertTime(timestamp) {
		var minutes = Math.floor(timestamp / 60);
		var seconds = timestamp - minutes * 60;
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		timestamp = minutes + ':' + seconds;
		return timestamp;
	},
	render: function render() {
		return (
			React.createElement("div", { className: "Timestamps" },
				React.createElement("div", { className: "Time Time--current" }, this.convertTime(this.props.currentTime)),
				React.createElement("div", { className: "Time Time--total" }, this.convertTime(this.props.duration))));


	} });



// Render the UI
ReactDOM.render(
React.createElement(Player, null),
document.querySelector('body'));

// Next Player
 document.getElementById('cover_art').addEventListener("click", function(){
    WebPlayer_bloodrealm();
 });
}