const btnHamburger = document.querySelector('#btnHamburger');//setting the selector based on ide
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

btnHamburger.addEventListener('click', function(){ // listens for the click action
    console.log("click hamburger button"); //log the action
    if(header.classList.contains("open")){ //adding or removing the class for the selected elemented
        header.classList.remove("open");
        overlay.classList.remove("fadein");
        overlay.classList.add("fadeout");
    } else {
        header.classList.add("open");
        overlay.classList.remove("fadeout");
        overlay.classList.add("fadein")
    }
});
