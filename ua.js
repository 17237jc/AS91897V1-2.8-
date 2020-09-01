var b = document.documentElement;
              b.setAttribute('data-useragent',  navigator.userAgent);
              b.setAttribute('data-platform', navigator.platform );
              b.className += ((!!('ontouchstart' in window) || !!('onmsgesturechange' in window))?' touch':'');


window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("myTopnav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}