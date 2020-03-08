/**
* General script
*
*@author Samy Sah samy.sah@student.odisee.be>
*
*/

let menu = document.querySelectorAll('.menu a');
let rngSize = document.querySelector('#rngSize');
let imgBig = document.querySelector('#imgBig');
menu.addEventListener('change', function() {
	imgBig.style.fontSize = this.value;
});