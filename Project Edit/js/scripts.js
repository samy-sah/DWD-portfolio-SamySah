/**
* General script
*
*@author Samy Sah <samy.sah@student.odisee.be>
*
*/
(function(){
	'use strict';

    // =====================================
	// Titel effect
    // =====================================
    const title = document.querySelector('.effect');
    const text = title.textContent;//Om de titel van de pagina te kunnen opvragen
    const divideText = text.split("");//Begin van onze effect
    title.textContent = "";

    for(let i=0; i< divideText.length; i++){ // om een loop te kunnen creeren
        title.innerHTML += "<span>" + divideText[i] + "</span>";
    }
    
    let letter = 0; // Om te starten vanaf de eerste letter namelijk "E"
    let onDo = function(){
        const span = title.querySelectorAll('span')[letter];
        span.classList.add('vervang');
        letter++
        if(letter === divideText.length){
            end();
        }
    }
    let timer = setInterval(onDo, 65);
    let end = function(){
        clearInterval(timer);
        timer = null;
    }

    // =====================================
	// Filters
    // =====================================
    
    let save = document.querySelector('#save');
    let reset = document.querySelector('#reset');
	let filter1 = document.querySelector('#normal');
	let filter2 = document.querySelector('#grayscale');
	let filter3 = document.querySelector('#brightness');
	let filter4 = document.querySelector('#blur');
    let filter5 = document.querySelector('#hue');
    let filter6 = document.querySelector('#sepia');
	let rngSize = document.querySelector('#rngSize');
    let percent = document.querySelector('#percent');

    // =====================================
	// Images loader  
    // =====================================
    
    window.addEventListener('load', function(){
        let btn = document.querySelector('#btn');
        let inFoto = document.getElementById('inFoto');
        let slider = document.querySelectorAll('.slider');
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