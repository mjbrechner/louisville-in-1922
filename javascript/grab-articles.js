'use strict';

let artDate;
artDate = `${day} ${monthName}`;

for (const e of artArray) {
    if (e.artDateIdentifier === artDate) {
        document.getElementById('article-title').textContent = e.artContents.artTitle;
        document.getElementById('article-subtitle').textContent = e.artContents.artSubtitle;
        document.getElementById('article-body').textContent = e.artContents.artBody;
        document.getElementById('article-paper').textContent = "Louisville Courier-Journal";
        document.getElementById('article-date').textContent = `${e.artDateIdentifier} 1922`;
        document.getElementById('article-page').textContent = `${e.artContents.artPage}`;
        break;
    } else if (artDate === "29 February") {
        document.getElementById('article-title').textContent = "Leap Year!";
        document.getElementById('article-subtitle').textContent = " ";
        document.getElementById('article-body').textContent = "Since February only had 28 days in 1922, there is no article to display today. Please check back tomorrow!";
        document.getElementById('article-paper').textContent = " ";
        document.getElementById('article-date').textContent = " ";
        document.getElementById('article-page').textContent = " ";
        break;
    } else { // This should never occur but is here  in case of an unexpected error.
        document.getElementById('article-title').textContent = "Error!";
        document.getElementById('article-subtitle').textContent = " ";
        document.getElementById('article-body').textContent = "Oopsie. An error has occurred.";
        document.getElementById('article-paper').textContent = " ";
        document.getElementById('article-date').textContent = " ";
        document.getElementById('article-page').textContent = " ";
    }
};