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




