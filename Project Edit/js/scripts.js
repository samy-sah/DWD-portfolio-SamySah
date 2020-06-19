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
    // inspiratie:
    // https://stackoverflow.com/questions/36806228/how-to-animate-text-without-dividing-letters-in-spans
    // https://www.freecodecamp.org/forum/t/setinterval-and-javascript-animation/172709/6
    // https://www.sitepoint.com/how-to-perform-single-character-transforms-with-css-and-js/
    // =====================================
    const title = document.querySelector('.effect');
    const textH = title.textContent;//Om de titel van de pagina te kunnen opvragen zonder de class
    const divideText = textH.split('');//splits de titel van de pagina letter per letter
    title.textContent = ''; // zodat de h1 wordt gereset

    // ga over alle characters van de h1
    for (let i = 0; i < divideText.length; i++){ // om een loop te kunnen creeren
        title.innerHTML += "<span class='span'>" + divideText[i] + "</span>"; // generate span 
    }
    
    let letter = 0; // Om te starten vanaf de eerste letter namelijk "E"

    // define functions
    let onDo = function(){
        const span = title.querySelectorAll('span')[letter]; // neem alle span van boven van 0 tot het einde
        span.classList.add('vervang'); // voeg een class toe
        letter++ // incrementeer
        // identity operator
        if(letter === divideText.length){ // als de zin titel klaar is end de functie
            end();
        }
    }
    // setinterval van 90 milliseconden
    let timer = setInterval(onDo, 90); // execute onDo
    let end = function(){
        clearInterval(timer);
    }
    // =====================================
    // Filters en sliders
    // https://stackoverflow.com/questions/36518150/changing-css-filter-values-via-javascript
    // =====================================
    window.addEventListener('load', function(){
        let img = document.getElementById('inFoto');  // element with id 'inFoto' get by id; returns a single result
        let canvases = document.querySelector('canvas'); //get by CSS selector; returns a single result
        let reset = document.querySelector('#reset');
        let grayscale = document.getElementById('grayscale');
	    let brightness = document.getElementById('brightness');
	    let blur = document.getElementById('blur');
        let invert = document.getElementById('invert');
        let sepia = document.getElementById('sepia');
        let contrast = document.getElementById('contrast');
        let opacity = document.getElementById('opacity');
        let resizable = document.getElementById("resizable");
        
        // apply filters
        let effect = function(){
            img.style.filter = 'brightness('+brightness.value+'%) grayscale('+grayscale.value+'%) blur('+blur.value+'px) invert('+invert.value+'%) sepia('+sepia.value+'%) contrast('+contrast.value+'%) opacity('+opacity.value+'%)';       	
        }
        grayscale.addEventListener('input', effect);
        brightness.addEventListener('input', effect);
        blur.addEventListener('input', effect);
        invert.addEventListener('input', effect);
        sepia.addEventListener('input', effect);
        contrast.addEventListener('input', effect);
        opacity.addEventListener('input', effect);

        // reset sliders and canvas
        reset.addEventListener('click', function(e) {
            e.preventDefault();
            img.style = "";
            resizable.style = " max-width: 100%; max-height: 45rem; "
            grayscale.value = '0';
            brightness.value = '100';
            blur.value = '0';
            invert.value = '0';
            sepia.value ='0';
            contrast.value ='100';
            opacity.value ='100';
            let context = canvases.getContext('2d');
            context.clearRect(0, 0, canvases.width, canvases.height);
        });

        // store image in localstorage
        img.addEventListener('load', function() {
        localStorage.setItem("imageData", this.src);
        });

        if (localStorage.getItem("imageData")) {
        img.src = localStorage.getItem("imageData");
        }

        // remove localstorage
        remove.addEventListener('click', function(){
            img.src = localStorage.removeItem("imageData");
            location.reload(); // reload page
        });
        
        // save filter and put it into the canvas
        document.getElementById('saveEffect').addEventListener('click', function() {
            let context = canvases.getContext('2d');
            context.clearRect(0, 0, canvases.width, canvases.height);
            context.filter = getComputedStyle(img).getPropertyValue('filter');
            // Math.min() returns the number with the lowest value.
            let schaal = Math.min(canvases.width / img.width, canvases.height / img.height);
            let hori = (canvases.width / 2) - (img.width / 2) * schaal;
            let verti = (canvases.height / 2) - (img.height / 2) * schaal;
            // draw the new image
            context.drawImage(img, hori, verti, img.width * schaal, img.height * schaal);      
        });

        // save filter with enter key
        document.addEventListener('keydown', function(e){
            e.preventDefault();
            if(e.keyCode == 13){
                let context = canvases.getContext('2d');
                context.clearRect(0, 0, canvases.width, canvases.height);
                context.filter = getComputedStyle(img).getPropertyValue('filter');
                // Math.min() returns the number with the lowest value.
                let schaal = Math.min(canvases.width / img.width, canvases.height / img.height);
                let hori = (canvases.width / 2) - (img.width / 2) * schaal;
                let verti = (canvases.height / 2) - (img.height / 2) * schaal;
                // draw the new image
                context.drawImage(img, hori, verti, img.width * schaal, img.height * schaal);      
            }
        });

        // download the image into your folder.
        let save = document.querySelector('#save');
        save.addEventListener('click', function(){
            const a = document.createElement("a");
            a.href = canvases.toDataURL();
            a.download = "image.png";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });

        // =====================================
        // Images loader  
        // =====================================

        let myfile = document.querySelector('#myfile');
        myfile.addEventListener('change', function() {
            let url = URL.createObjectURL(myfile.files[0]); // A File, Blob or MediaSource object for which an object URL will be created. // returns a File object at the index 0
            img.src = url; // displays the value of the src attribute of the image.
        });
    });
})();