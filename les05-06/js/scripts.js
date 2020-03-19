(function() {
	'use strict';

	window.addEventListener('load', function(){
		let btnLogin = document.querySelector('#btnLogin');
		let loginmodal = document.querySelector('#loginmodal');

		btnLogin.addEventListener('click', function(e){
			e.preventDefault();
			loginmodal.classList.add('show');
		}); 
	});
})();