'use strict';

// document.getElementById('article-title').textContent = June30.artTitle;
// document.getElementById('article-subtitle').textContent = June30.artSubtitle;
// document.getElementById('article-body').textContent = June30.artBody;
// document.getElementById('article-date').textContent = `${June30.artDay} ${June30.artMonth} 1922`;
// document.getElementById('article-page').textContent = `p. ${June30.artPage}`;


let artDate;
artDate = monthName+day;
artDate = July12;

document.getElementById('article-title').textContent = artDate.artTitle;
document.getElementById('article-subtitle').textContent = artDate.artSubtitle;
document.getElementById('article-body').textContent = artDate.artBody;
document.getElementById('article-date').textContent = `${artDate.artDay} ${artDate.artMonth} 1922`;
document.getElementById('article-page').textContent = `p. ${artDate.artPage}`;