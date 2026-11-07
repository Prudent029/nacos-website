
// =====================================
// NACOS WEBSITE - JAVASCRIPT
// =====================================


// WELCOME MESSAGE
window.addEventListener("load", function() {
    console.log("Welcome to the NACOS website!");
});


// AUTOMATIC COPYRIGHT YEAR
let currentYear = new Date().getFullYear();

document.getElementById("year").textContent = currentYear;


// DIGITAL CLOCK
function updateClock() {
    let now = new Date();

    let time = now.toLocaleTimeString();

    document.getElementById("clock").textContent = time;
}

updateClock();

setInterval(updateClock, 1000);


// HAMBURGER MENU
let menuToggle = document.getElementById("menuToggle");
let navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    let menuIsOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", menuIsOpen);

    menuToggle.setAttribute(
        "aria-label",
        menuIsOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = menuIsOpen ? "✕" : "☰";
});


// CLOSE MENU AFTER CLICKING A LINK
let navItems = navLinks.querySelectorAll("a");

navItems.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation menu");

        menuToggle.textContent = "☰";

    });

});


// BACK TO TOP BUTTON
let backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});