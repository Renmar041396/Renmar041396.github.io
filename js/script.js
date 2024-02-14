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