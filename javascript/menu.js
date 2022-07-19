'use strict';
function menuFunction() {
    let e = document.getElementById("nav-menu");
    if (e.style.display === "block") {
        e.style.display = "none";
    } else {
        e.style.display = "block"
    }
}