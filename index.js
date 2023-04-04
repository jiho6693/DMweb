let timer;

function gotop() {
  clearTimeout(timer);
  timer = setTimeout(function() {
    window.scroll(0,0);
  }, 3600);
}

document.addEventListener('mousemove', function() {
  gotop();
});

gotop();