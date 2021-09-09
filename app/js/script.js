
// Hamburger Menu toggle
const btnHamburger = document.getElementById("btnHamburger");
const header = document.getElementById("header");
const fadeElems = document.querySelectorAll('.has-fade');
const overlay = document.getElementById("overlay");
const htmlTag = document.getElementById("html");


function openMenu(){
    header.classList.toggle("open");
    overlay.classList.toggle("overlay");
    htmlTag.classList.toggle("no-scrolling");

    
    if(header.classList.contains('open')){
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
        btnHamburger.setAttribute('aria-expanded', 'true');
        
    }
    else {
        
        fadeElems.forEach(function(element){
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        });
        btnHamburger.setAttribute('aria-expanded', 'false');
    
    }
}


