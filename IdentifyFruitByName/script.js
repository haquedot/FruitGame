const start = document.querySelector(".start");
const nav = document.querySelector(".openDiv");
const navOpen = document.querySelector(".open");
const navClose = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

start.addEventListener("click", function() {
    hideShow1();

});

function hideShow1() {
    start.style.display = "none";
    nav.style.display = "block";
}

function hideShow2() {
    sidebar.style.display = "flex";
    navClose.style.display = "block";

}

function resume() {
    sidebar.style.display = "none";
    navClose.style.display = "none";
    navOpen.style.display = "block";
}

navOpen.addEventListener("click", function() {
    hideShow2();


});

navClose.addEventListener("click", function() {
    resume();


});
theme = document.getElementById("theme");
theme.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains('dark-theme')) {
        theme.innerHTML = "LIGHT MODE";
    } else {
        theme.innerHTML = "DARK MODE";
    }
}