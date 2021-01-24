
mylinkPS = document.getElementsByName('linkPS');


function topFUnction() {
   document.body.scrollTop = 2000; // For Safari
   document.documentElement.scrollTop = 2000; // For Chrome, Firefox, IE and Opera
}


mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}






