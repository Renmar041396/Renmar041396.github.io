document.addEventListener("DOMContentLoaded", function() {
    var content = document.getElementById("content");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            content.classList.add("scrolled-shadow");
        } else {
            content.classList.remove("scrolled-shadow");
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
    document.querySelector('.summary').classList.add('p-animate');
}
  
window.onload = animateOnLoad;
