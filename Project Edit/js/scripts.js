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
    let timer = setInterval(onDo, 65); // timer zodat de het stopt
    let end = function(){
        clearInterval(timer);
        timer = null;
    }
    // =====================================
    // Filters en sliders
    // https://www.tutorialspoint.com/How-to-set-the-brightness-and-contrast-of-an-image-with-JavaScript
    // https://stackoverflow.com/questions/36518150/changing-css-filter-values-via-javascript
    // =====================================
    let img = document.getElementById('inFoto');  // element with id 'inFoto'
    let canvases = document.querySelector('canvas');
    let slider = document.querySelectorAll('.slider'); 
    let reset = document.querySelector('#reset');
    let grayscale = document.getElementById('grayscale');
	let brightness = document.getElementById('brightness');
	let blur = document.getElementById('blur');
    let invert = document.getElementById('invert');
    let sepia = document.getElementById('sepia');
    let contrast = document.getElementById('contrast');
    let opacity = document.getElementById('opacity');

    // apply filters
    let effect = function(){
        let bri = brightness.value;
        let gray = grayscale.value;
        let blu = blur.value;
        let inv = invert.value
        let sep = sepia.value
        let con = contrast.value
        let op = opacity.value
        
        img.style.filter = 'brightness('+bri+'%) grayscale('+gray+'%) blur('+blu+'px) invert('+inv+'%) sepia('+sep+'%) contrast('+con+'%) opacity('+op+'%)';        	
    }
    document.getElementById('grayscale').addEventListener('input', effect);
    document.getElementById('brightness').addEventListener('input', effect);
    document.getElementById('blur').addEventListener('input', effect);
    document.getElementById('invert').addEventListener('input', effect);
    document.getElementById('sepia').addEventListener('input', effect);
    document.getElementById('contrast').addEventListener('input', effect);
    document.getElementById('opacity').addEventListener('input', effect);

    // reset sliders and canvas
    reset.addEventListener('click', function(e) {
        e.preventDefault();
        img.style = '';
        grayscale.value = '0';
        brightness.value = '100';
        blur.value = '0';
        invert.value = '0';
        sepia.value ='0';
        contrast.value ='100';
        opacity.value ='100';
        let context = canvases.getContext('2d');
        context.clearRect(10, 10, canvases.width, canvases.height);
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
    });
    
    // save filter and put it into the canvas
    document.getElementById('saveEffect').addEventListener('click', function() {
        let context = canvases.getContext('2d');
        context.clearRect(10, 10, canvases.width, canvases.height);
        context.filter = getComputedStyle(img).getPropertyValue('filter');
        context.drawImage(img,10, 10, img.width, img.height);
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
})();