var header = document.getElementById("myHeader");
var logo = document.getElementById("sticky-logo");

if (header) {
  var sticky = header.offsetTop;
  header.style.textAlign = "right";
}
if (logo) {
  logo.style.display = "block";
}
         
window.onscroll = function() {myFunction()};

function myFunction() {
  if (!header) return;
  if (window.pageYOffset > sticky) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

var greylogo = document.getElementById("greylogo");
window.onload = function() {changeLogo()};
window.onresize = function() {changeLogo()};
function changeLogo() {
  if (!greylogo) return;
  var w = window.innerWidth;
  if (w < 495) {
    // greylogo.style.width = "1.6rem";
    greylogo.src = "img/logo-initials.svg";
  } else {
    // greylogo.style.width = "7.2rem";
    greylogo.src = "img/logo.svg";
  }
}

// Ensure correct initial header state on load
myFunction();