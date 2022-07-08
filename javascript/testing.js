'use strict';

let artTitle = "20,000 Barrels of Liquor Sent To France is Resold in America";
let artSubtitle = "Members of $2,000,000 Whisky Pool Rejoice As Settlement Is Made for Canada-Indies Sale";
let artBody = "The last chapter of a whisky adventure overseas undertaken by Louisville and Pennsylvania distillers was completed yesterday with a happy ending. A committee in charge of the transaction met in the office of the Brown, Forman Company, Columbia Building, and reported that approximately $2,000,000 was in sight for the participants in the whisky pool. The last of the whisky was sold two months ago at French ports. In January, 1919, the movement of 20,000 barrels of the best Kentucky whisky and Pennsylvania rye was undertaken. The liquor was landed at La Havre, France. Europeans were reported to have purchased the liquor. But whether it was the competition of vin blanc and vin rouge or whether the European appetite was not accustomed to good whisky, rumor said, the liquor did not sell quickly in Europe. After many months of delay, American firms began the purchase of the liquor in lots of 2,000 barrels, it was said. These purchasers were not named by the committee, but it is said much of the liquor came back across the seas and reached the West Indies and Canada. The committee which had the whisky pool in charge consisted of Owsley Brown and Will Cox of Louisville; Otis Glazebrook of New York and Tom Felder of Paris, France. The latter two were not present yesterday. Besides Mr. Brown, those who attended the meeting were Thomas Bullitt, leland Taylor and W. C. Wheeler of Louisville; D. J. Hicks of the Overholt Distilling Company of Pittsburgh; Sam Baumgarten of the Jefferson Distilling Company of St. Louis; S. Hirsch of Kansas City, and W. W. Parks of Duquesne, Iowa.";
let artPage = 2;
let artDay = 30;
let artMonth = "June";


document.getElementById('article-title').textContent = artTitle;
document.getElementById('article-subtitle').textContent = artSubtitle;
document.getElementById('article-body').textContent = artBody;
document.getElementById('article-date').textContent = `${artDay} ${artMonth} 1922`;
document.getElementById('article-page').textContent = `p. ${artPage}`;

