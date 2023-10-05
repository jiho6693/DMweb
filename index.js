let timer;

function gotop() {
  clearTimeout(timer);
  timer = setTimeout(function() {
    window.scroll(0,0);
  }, 10000);
}

document.addEventListener('mousemove', function() {
  gotop();
});

gotop();



// fullscreen.js 파일에 추가
const videoContainer = document.querySelector('.main');
const videoIframe = videoContainer.querySelector('iframe');

videoContainer.addEventListener('click', () => {
    // 비메오 비디오를 전체 화면으로 변경합니다.
    if (videoIframe.requestFullscreen) {
        videoIframe.requestFullscreen();
    } else if (videoIframe.mozRequestFullScreen) { // Firefox
        videoIframe.mozRequestFullScreen();
    } else if (videoIframe.webkitRequestFullscreen) { // Chrome, Safari 및 Opera
        videoIframe.webkitRequestFullscreen();
    } else if (videoIframe.msRequestFullscreen) { // IE/Edge
        videoIframe.msRequestFullscreen();
    }
});