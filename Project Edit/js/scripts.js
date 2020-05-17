/**
* General script
*
*@author Samy Sah <samy.sah@student.odisee.be>
*
*/
(function(){
    'use strict';
    // =====================================
	// Filters en sliders
    // =====================================

    let slider = document.querySelectorAll('.slider');
    let save = document.querySelector('#save');
    let reset = document.querySelector('#reset');
    let filter1 = document.querySelector('#normal');
    let filter2 = document.querySelector('#grayscale');
	let filter3 = document.querySelector('#brightness');
	let filter4 = document.querySelector('#blur');
    let filter5 = document.querySelector('#hue');
    let filter6 = document.querySelector('#sepia');
	let rngSize = document.querySelector('#rngSize');
    let sliderVal = document.querySelector('#slider1-val');
    let color = document.querySelector('#inpColor');
    
    let applyAll = function() {
        inFoto.style.color = color.value;
    }
    // attach events
    color.addEventListener('change', applyAll);

    rngSize.addEventListener('input', function(){
		sliderVal.innerHTML = parseInt(this.value * 100) + '%';
		inFoto.style.opacity = this.value;
    });

    reset.addEventListener('click', function(e) {
        e.preventDefault();
        slider.innerHTML = rngSize.value = '0';
        sliderVal.innerHTML = '';
        inFoto.style = '';
    });
    
    // =====================================
	// Images loader  
    // =====================================
    
    window.addEventListener('load', function(){
        let btn = document.querySelector('#btn');
        let inFoto = document.getElementById('inFoto');
        btn.addEventListener('click', function(e){
            e.preventDefault();
            let url = document.getElementById('url');
            let urliVal = url.value;
            inFoto.setAttribute('src',urliVal);
        });
    });
    let myfile = document.querySelector('#myfile');
    let imageE = document.querySelector('#inFoto');
    myfile.addEventListener('change', function() {
        let url = URL.createObjectURL(myfile.files[0]);
        inFoto.src = url;
    });
})();