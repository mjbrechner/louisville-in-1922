'use strict';

function menuFunction() {
    let e = document.getElementById("nav-menu");
    if (e.style.display === "block") {
        e.style.display = "none";
    } else {
        e.style.display = "block"
    }
};



// const mediumScreen = window.matchMedia("min-width: 768px");
// let screenWidth = window.outerWidth;

// function menuAlwaysVisible() {
// let e = window.outerWidth;
// if (screenWidth >= 768) {
// e.style.display = "block";
// } else {
//     e.style.display = "none";
// }
// }

// menuAlwaysVisible();
// mediumScreen.addEventListener(menuAlwaysVisible);

// // function menuNeverVisible(smallScreen) {
// // if (smallScreen.matches) {
// //     e.style.display = "none"
// // } else
// // e.style.display = "block"
// // };
// function menuAlwaysVisible(mediumScreen) {
// if (mediumScreen.matches) {
//     e.style.display = "none"
// } else
// e.style.display = "block"
// };


// // menuNeverVisible(smallScreen);
// // smallScreen.addEventListener(menuNeverVisible);
// menuAlwaysVisible(mediumScreen);
// mediumScreen.addEventListener(menuAlwaysVisible);