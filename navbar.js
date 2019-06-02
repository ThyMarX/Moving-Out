// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset - 8 >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
	
// responsive burger menu

let navbarID = document.getElementById("navbar");
navbarID.onclick = function() {
	if (navbarID.className === "navbar"){
		navbar.classList.add("responsive");
	} else	if (navbarID.className === "navbar sticky"){
		navbar.classList.add("responsive");
	} else	if (navbarID.className === "navbar responsive") {
		navbar.classList.remove("responsive");
	} else	if (navbarID.className === "navbar sticky responsive") {
		navbar.classList.remove("responsive");
	} else	if (navbarID.className === "navbar responsive sticky") {
		navbar.classList.remove("responsive");
	}
}