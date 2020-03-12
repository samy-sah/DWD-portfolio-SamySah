/**
* General script
*
*@author Samy Sah samy.sah@student.odisee.be>
*
*/

'use strict'
let van;
let filters;

let reset = function(){
	van.classList.remove('gray', 'sepia', 'hue', 'blur' );
	for (let filter of filters){
		filter.classList.remove('active');
	}
}

window.addEventListener('load', function(){

	van = document.querySelector('#van');
	filters = document.querySelectorAll('.filter');
	let filter1 = document.querySelector('#filter-normal');
	let filter2 = document.querySelector('#filter-gray');
	let filter3 = document.querySelector('#filter-sepia');
	let filter4 = document.querySelector('#filter-hue');
	let filter5 = document.querySelector('#filter-blur');
	let rngSize = document.querySelector('#rngSize');
	let slider = document.querySelector('#slider');

	filter1.addEventListener('click', function(){
		reset();
		this.classList.add('active');
	});
	filter2.addEventListener('click', function(){
		reset();
		this.classList.add('active');
		van.classList.add('gray');
	});
	filter3.addEventListener('click', function(){
		reset();
		this.classList.add('active');
		van.classList.add('sepia');
	});
	filter4.addEventListener('click', function(){
		reset();
		this.classList.add('active');
		van.classList.add('hue');
	});
	filter5.addEventListener('click', function(){
		reset();
		this.classList.add('active');
		van.classList.add('blur');
	});
	rngSize.addEventListener('input', function(){
		slider.innerHTML = parseInt(this.value + 100) + '%';
		van.style.opacity = this.value;
	});

}); 