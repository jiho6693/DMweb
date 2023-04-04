let timer;

function gohome() {
  clearTimeout(timer);
  timer = setTimeout(function() {
    window.location.pathname = "./index.html";
  }, 16000);
}

document.addEventListener('mousemove', function() {
  gohome();
});

gohome();