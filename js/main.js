var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
var logo = document.getElementById("sticky-logo");

header.style.textAlign = "right";
header.style.backgroundColor = "rgba(255,255,255,0.72)";
logo.style.display = "block";
         
window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.style.boxShadow = "0 0.05rem 0.5rem rgba(0, 0, 0, 0.15)";
    // header.style.backdropFilter = "saturate(180%) blur(16px)";
  } else {
    header.style.boxShadow = "none";
    // header.style.backdropFilter = "none";
  }
}

var greylogo = document.getElementById("greylogo");
window.onload = function() {changeLogo()};
window.onresize = function() {changeLogo()};
function changeLogo() {
  var w = window.innerWidth;
  if (w < 495) {
    // greylogo.style.width = "1.6rem";
    greylogo.src = "img/logo-initials.svg";
  } else {
    // greylogo.style.width = "7.2rem";
    greylogo.src = "img/logo.svg";
  }
}