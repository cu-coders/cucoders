// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
  <!-- Go to top End-->
  <!-- Hide the scrollbar -->
function disableScrolling() {
    setTimeout(function() {
        document.body.style.overflow = 'hidden';
    }, 1000);
}
  
function enableScrolling() {
    document.body.style.overflow = '';
}