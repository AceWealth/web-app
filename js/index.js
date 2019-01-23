function WebPlayer() {
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
				name: "",
				artist: localStorage.NPChannel,
				album: localStorage.NPChannel,
				year: 2019,
				artwork: "",
				elapsed: sessionStorage.NPElapsed,
				duration: sessionStorage.NPDuration,
				source: localStorage.NPurl,
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
		innerScrubber.style['width'] = percent;
	},
	togglePlay: function togglePlay() {
		var status = this.state.playStatus;
		// Bind Web Player "view" to Plyr.io
		var audio = document.getElementById('audio');
		if (status === 'play') {
			status = 'pause';
			audio.play();
			var that = this;
			loadNowPlaying();
		} else {
			status = 'play';
			audio.pause();
		}
		this.setState({ playStatus: status });

	},
	render: function render() {
		return (
				React.createElement("div", { className: "Player animated bounceIn delay-2s" },
				React.createElement("div", { className: "Background", style: { 'backgroundImage': 'url(' + this.props.track.artwork + ')' } }),
				React.createElement("div", { className: "Header" },
				React.createElement("div", { className: "Title" }, localStorage.NPChannel + " | Now playing")),
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
				React.createElement("div", { className: "Name", id: "title" }, this.props.track.name),
				React.createElement("div", { className: "Artist", id: "artist" }, this.props.track.artist),
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
setExternalLinks();
}
