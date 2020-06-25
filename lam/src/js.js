Play.onclick = function Play() {
    var o = document.getElementById("myvideo");
o.src ="https://alkarradatech.xyz/html5apps/hearingtest";
}
openFullscreen.onclick = function openFullscreen() {
    var elem = document.getElementById("myvideo");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
