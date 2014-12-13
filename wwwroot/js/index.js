
var player;
$(document).ready(function () {

    $('.carousel').carousel({
        interval: 5000 //changes the speed
    });
});


// yt instrukcja https://developers.google.com/youtube/iframe_api_reference?hl=pl
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: '8Csh94TGySQ',
        playerVars: {
            'controls': '0',
            'enablejsapi': '1',
            'autoplay': '0',
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        muteVideo();
        done = true;
    }
}

function muteVideo() {
    player.mute();
}

