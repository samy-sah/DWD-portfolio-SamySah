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
    const textH = title.textContent;//Om de titel van de pagina te kunnen opvragen
    const divideText = textH.split("");//Begin van onze effect
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
    
    rngSize.addEventListener('input', function(){
		sliderVal.innerHTML = parseInt(this.value * 100) + '%'; // change the content
		inFoto.style.opacity = this.value; // change css properties
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
        let inFoto = document.getElementById('inFoto'); // element with id 'inFoto'            
        let url = document.getElementById('url'); // element with id 'url' 
        btn.addEventListener('click', function(e){
            e.preventDefault();
            let urliVal = url.value; // displays the URL of the URL field.
            inFoto.src = urliVal;
        });
    });
    // LOCALE STORAGE NOG MAKEN EN OPZOEKEN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let myfile = document.querySelector('#myfile');
    myfile.addEventListener('change', function() {
        let url = URL.createObjectURL(myfile.files[0]); // A File, Blob or MediaSource object for which an object URL will be created.
        // returns a File object at the index 0
        inFoto.src = url; // displays the value of the src attribute of the image.
    });
})();