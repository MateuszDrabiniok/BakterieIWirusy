

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
var player2;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: '8Csh94TGySQ',
        playerVars: {
            'controls': '0',
            'enablejsapi': '1',
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    player2 = new YT.Player('player2', {
        videoId: 'gEwzDydciWc',
        playerVars: {
            'controls': '0',
            'enablejsapi': '1',
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange2
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;
var done2 = false;
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING && !done) {
        muteVideo(player);
        done = true;
    }
    if (event.data === YT.PlayerState.ENDED) {
        player.loadVideoById('8Csh94TGySQ');
    }
}

function onPlayerStateChange2(event) {
    if (event.data === YT.PlayerState.PLAYING && !done2) {
        muteVideo(player2);
        done2 = true;
    }
    if (event.data === YT.PlayerState.ENDED) {
        player2.loadVideoById('gEwzDydciWc');
    }
}



function muteVideo(p) {
    p.mute();
	
}

