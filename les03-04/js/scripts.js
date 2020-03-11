/**
* General script
*
*@author Samy Sah samy.sah@student.odisee.be>
*
*/

let menu = document.querySelectorAll('.menu a');
let rngSize = document.querySelector('#rngSize');
let imgBig = document.querySelector('#imgBig');
menu.addEventListener('click', function() {
	imgBig.style.filter = grayscale(100%);
});
rngSize.addEventListener('input', function() {
	imgBig.style.filter = opacity(this.value);
});