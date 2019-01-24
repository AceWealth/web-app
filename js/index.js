// Load elements on page
window.onload = function () {
        WebPlayer();
        loadNowPlaying();
        document.getElementsByClassName("Player")[0].style.opacity = "1";
}
// Force remove blur on Web Player
$('.Player').css('filter', 'blur(0px)');
