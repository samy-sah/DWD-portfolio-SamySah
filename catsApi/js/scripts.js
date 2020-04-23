(function(){
    'use strict';

    let currPageNr = 1;

    function doSearch(pageNr){
        pageNr = pageNr || 1;
        let url = 'https://api.thecatapi.com/v1/breeds?';

        // append parameters
        let params = new URLSearchParams();
        params.append('limit', 10);
        params.append('page', pageNr);
        url = url + params.toString();

        let options = {
            headers: {
                'x-api-key': '79a81c09-cee5-4d9c-b0ae-abcca6262ac0'
            }
        };
        fetch(url, options)
        // handle response 
        .then(function(resp){
            return resp.json();
        })
        // handle response data
        .then(function handleSuccess(data){
            mySelect.classList.remove('hidden');
            let html = '';
            for(let row of data){
                html += '<option>' + row.name + '</option>';
            }
            mySelect.innerHTML = html;
        })
        .catch(function(err) {
            console.log('Request failed', err)
        });
    }
    
    window.addEventListener('load', function(){
        let mySelect = document.querySelector('#mySelect');
        let lnkPrev = document.querySelector('#lnkPrev');
        let lnkNext = document.querySelector('#lnkNext');
        doSearch(currPageNr);
    });
})();