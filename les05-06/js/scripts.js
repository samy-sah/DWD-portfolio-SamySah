/**
* General script
*
*@author Samy Sah 
*<samy.sah@student.odisee.be>
*
*/
;(function(){
	'use strict';

	// =====================================
	// Login form
	// =====================================

	// open/close
	let btnLogin = document.querySelector('#btnLogin');
	let btnCancel = document.querySelector('#btnCancel');
	let loginmodal = document.querySelector('#loginmodal');
	btnLogin.addEventListener('click', function(e){
		e.preventDefault();
		loginmodal.classList.add('show');
	});
	btnCancel.addEventListener('click', function(e){
		e.preventDefault();
		loginmodal.classList.remove('show');
		loginmodal.classList.add('hide');
	});
		
	// =====================================
	// Form checking
	// =====================================

	let frmLogin = document.querySelector('#login__form');
	let inpUname = document.querySelector('#inpUname');
	let errUname = document.querySelector('#errUname');

	frmLogin.setAttribute('novalidate', 'novalidate');
	frmLogin.addEventListener('submit', function(e) {
		
		// halt event
		e.preventDefault();

		// all ok for now
		let valid = true;

		errUname.innerHTML = '';
		// draw conclusion
		if (inpUname.innerHTML = '') {
			errUname.innerHTML = 'Gelieve een naam in te geven';
			valid = false;
		}
		if (valid) this.submit();
	});
	

	// =====================================
	// Slideshow
	// =====================================

	let lnkFirst = document.querySelector('#lnkFirst');
	let lnkPrev = document.querySelector('#lnkPrev');
	let lnkNext = document.querySelector('#lnkNext');
	let lnkLast = document.querySelector('#lnkLast');
	let imgBig = document.querySelector('#large__figure img');
	let txtTitle = document.querySelector('#large__figure .large__title');
	let thumbs = document.querySelectorAll('.main__thumbs figure');
	let currThumb = 0;

	lnkFirst.addEventListener('click', function (e){
		e.preventDefault();
		currThumb = 0;
	})
	lnkPrev.addEventListener('click', function (e){
		e.preventDefault();
		if (currThumb > 0) currThumb--;
	})
	lnkNext.addEventListener('click', function (e){
		e.preventDefault();
		if (currThumb < thumbs.length - 1) currThumb++;
		let thumb = thumbs[currThumb];
		let thumbLink = thumb.querySelector('a');
		let thumbImg = thumb.querySelector('img');
		imgBig.src = thumbLink.href;
		txtTitle.innerHTML = thumbImg.alt;
		thumb.classList.add('active');
	})
	lnkLast.addEventListener('click', function (e){
		e.preventDefault();
		currThumb = thumbs.length - 1;
	})

	
	// =====================================
	// Filtering
	// =====================================

	let selAlbum = document.querySelector('#selAlbum');
	let btnSearch = document.querySelector('#btnSearch');

	let doFilter = function(){
		for (let thumb of thumbs){
			thumb.classList.remove('hide');
		}

		if (selAlbum.value != -1){
			for (let thumb of thumbs){
				let thumbAlbumId = thumb.getAttribute('data-albumid');
				if (thumbAlbumId != selAlbum.value) thumb.classList.add('hide');
			}
		}
	}
	selAlbum.addEventListener('select', doFilter);
	btnSearch.addEventListener('select', doFilter);
})();
