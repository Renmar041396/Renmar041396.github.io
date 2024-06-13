document.addEventListener("DOMContentLoaded", function() {
    var content = document.getElementById("content");
    var header_main = document.querySelector(".header-main");
    var header = document.querySelector(".header");
    window.addEventListener("scroll", function() {
        if(window.matchMedia("(min-width: 600px)").matches)
            {
                if (window.scrollY > 0) {
                    content.classList.add("scrolled-shadow");
                    header_main.style.top = "10px";
                    header.style.maxWidth = "80%";
                    header.style.borderRadius = "30px"
                } else {
                    content.classList.remove("scrolled-shadow");
                    header_main.style.top = "0px";
                    header.style.maxWidth = "100%";
                    header.style.borderRadius = "0px"
                }
             }
        else
            {
                if (window.scrollY > 0) {
                    content.classList.add("scrolled-shadow");
                } else {
                    content.classList.remove("scrolled-shadow");
                }
                header.style.maxWidth = "100%";
                header_main.style.top = "0";
            }
        
    });

});
let pop = document.getElementById("popup");
let progress = document.getElementById("main");

function progressOpen()
{
    pop.classList.add("showProgress");
    progress.style.filter = "blur(10px)";
}
function progressClose()
{
    pop.classList.remove("showProgress");
    progress.style.filter = "";
}
function downloadResume()
{
    var link = document.createElement('a');
    link.setAttribute('href','./files/renmar_bandong.pdf');
    link.setAttribute('download', 'Renmar Bandong.pdf');
    link.click();
}
function animateOnLoad() {
    var element = document.querySelector('.passion');
    element.classList.add('passion-animate');
    document.querySelector('.summary').classList.add('passion-animate');
}
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.getElementsByClassName('--card');
    const maxLength = 150;  // Set the number of characters you want to display

    Array.from(cards).forEach(card => {
        const cardContent = card.querySelector('p');
        if (cardContent && cardContent.innerText.length > maxLength) {
            cardContent.innerText = cardContent.innerText.substring(0, maxLength) + '...';
        }
    });
});
window.onload = animateOnLoad;
