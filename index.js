let timer;

function gotop() {
  clearTimeout(timer);
  timer = setTimeout(function() {
    window.scroll(0,0);
  }, 1200);
}

document.addEventListener('mousemove', function() {
  gotop();
});

gotop();