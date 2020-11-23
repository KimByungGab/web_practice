var bannerAudio = new Audio();

(function() {
    var mp3 = isSupportAudio();

    if(mp3) {
        bannerAudio.src = './banner_sound.mp3';
    } else {
        alert('음악을 실행할 수 없습니다.');
    }
}());
function clickBanner() {
    // bannerAudio.load();
    bannerAudio.play();
}
function mouseOverBanner() {
    bannerAudio.pause();
    bannerAudio.currentTime = 0;
}

function isSupportAudio() {
    var test = document.createElement('audio');
    
    return !!test.canPlayType('audio/mp3');
}