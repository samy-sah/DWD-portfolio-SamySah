/**
* General script
*
*@author Samy Sah samy.sah@student.odisee.be>
*
*/
;(function(){
	'use strict';
	window.addEventListener('load', function(){
		let btnLogin = document.querySelector('#btnLogin');
		let loginmodal = document.querySelector('#loginmodal');
		let lnkFirst = document.querySelector('#lnkFirst');
		let lnkPrev = document.querySelector('#lnkPrev');
		let lnkPlay = document.querySelector('#lnkPlay');
		let lnkNext = document.querySelector('#lnkNext');
		let lnkLast = document.querySelector('#lnkLast');
		let images = document.querySelectorAll('.main__thumbs a');
		let large = document.querySelector('#large__figure')
		let photos = large.querySelector('img');
		btnLogin.addEventListener('click', function(e){
			e.preventDefault();
			loginmodal.classList.add('show');
		});
		btnLogin.addEventListener('click', function(e){
			e.preventDefault();
			loginmodal.classList.remove('hide');
		});
		for (let image of images){
			let link = image.querySelector('a');
			let img = image.querySelector('img');
			lnkNext.addEventListener('click', function(e) {
				photos.src = link.href;
				photos.alt = img.alt;
				document.querySelector('.main__thumbs active').classList.remove('active');
				image.classList.add('active');
			});
		}
	});
})();
