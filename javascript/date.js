'use strict';

let today = new(Date);
let day = today.getDate();
let monthNum = today.getMonth() + 1;
let monthName;
let year = today.getFullYear();
let yearsSince1922 = year - 1922;

if (monthNum === 1) {
    monthName = 'January';
} else if (monthNum === 2) {
    monthName = 'February';
} else if (monthNum === 3) {
    monthName = 'March';
} else if (monthNum === 4) {
    monthName = 'April';
} else if (monthNum === 5) {
    monthName = 'May';
} else if (monthNum === 6) {
    monthName = 'June';
} else if (monthNum === 7) {
    monthName = 'July';
} else if (monthNum === 8) {
    monthName = 'August';
} else if (monthNum === 9) {
    monthName = 'September';
} else if (monthNum === 10) {
    monthName = 'October';
} else if (monthNum === 11) {
    monthName = 'November';
} else if (monthNum === 12) {
    monthName = 'December';
}



document.getElementById('date-display1').textContent = `Today is ${day} ${monthName}`;
document.getElementById('date-display2').textContent = `Let us travel back in time ${yearsSince1922} years to peek into a news story on this day in 1922.`;