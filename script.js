console.log("page loaded...");

function playVideo(video) {
    video.play();
}

function pauseVideo(video) {
    video.pause();
    // video.currentTime = 0;
}

playVideo();
pauseVideo();