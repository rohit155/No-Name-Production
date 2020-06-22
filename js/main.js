AOS.init({
    offset: 300,
    duration: 1000
});

//Get the button
var button = document.getElementById("buttonTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // smoothscroll.polyfill();
  document.body.scroll({ top: 0, left: 0, behavior: 'smooth' });
  document.documentElement.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

/* To Disable Inspect Element */
$(document).bind("contextmenu",function(e) {
  e.preventDefault();
 });
 
 $(document).keydown(function(e){
     if(e.which === 123){
        return false;
     }
 });
