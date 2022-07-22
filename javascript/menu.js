'use strict';

function menuFunction() {
    let e = document.getElementById("nav-menu");
    if (e.style.display === "block") {
        e.style.display = "none";
    } else {
        e.style.display = "block"
    }
};

window.addEventListener('resize', (event) => {
    if (true) {
        let e = window.innerWidth;
        if (e >= 768) {
            document.getElementById("nav-menu").style.display = "block";
        } else {
            document.getElementById("nav-menu").style.display = "none";
        }
    }
});