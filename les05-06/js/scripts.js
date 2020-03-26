/**
* General script
*
*@author Samy Sah samy.sah@student.odisee.be>
*
*/
(function(){
	'use strict';
	window.addEventListener('load', function(){
		let btnLogin = document.querySelector('#btnLogin');
		let btnCancel = document.querySelector('#btnCancel');
		let loginmodal = document.querySelector('#loginmodal');
		let login__form = document.querySelector('#login__form');
		let lnkFirst = document.querySelector('#lnkFirst');
		let lnkPrev = document.querySelector('#lnkPrev');
		let lnkPlay = document.querySelector('#lnkPlay');
		let lnkNext = document.querySelector('#lnkNext');
		let lnkLast = document.querySelector('#lnkLast');
		let images = document.querySelectorAll('.main__thumbs a');
		let large = document.querySelector('#large__figure');
		let photos = large.querySelector('img');
		btnLogin.addEventListener('click', function(e){
			e.preventDefault();
			loginmodal.classList.add('show');
		});
		btnCancel.addEventListener('click', function(e){
			e.preventDefault();
			loginmodal.classList.remove('show');
			loginmodal.classList.add('hide');
		});
		login__form.setAttribute('novalidate', 'novalidate');
		
		login__form.addEventListener('submit', function(e) {

		// halt event
		e.preventDefault();

		// all ok for now
		let valid = true;

		// perform checks here
		let inpUname = document.querySelector('#inpUname');
		let errUname = document.querySelector('#errUname');

		let inpPass = document.querySelector('#inpPass');
		let errPass = document.querySelector('#errPass');

		// hide error message
		errUname.innerHTML = '&nbsp;';

		if (inpUname.value == ''){
			valid = false;
			errUname.innerHTML = 'Gelieve een juiste email in te vullen';
		}

		// hide error message
		errPass.innerHTML = '&nbsp;';

		if (inpPass.value == ''){
			valid = false;
			errPass.innerHTML = 'Gelieve een wachtwoord in te vullen';
		}

		// draw conclusion
		if (isValid) {
			console.log('all ok');
		} else {
			console.log('form contains errors');
		}
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