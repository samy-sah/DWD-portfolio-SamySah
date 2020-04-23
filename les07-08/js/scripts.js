(function(){
    'use strict';
    
    window.addEventListener('load', function(){
        let frmSearch = document.querySelector('#frmSearch');
        let inpArtist = document.querySelector('#inpArtist');
        let btnSearch = document.querySelector('#btnSearch');
        let tblResults = document.querySelector('#results table');
        let spinner = document.querySelector ('#spinner');
        let tblBody = document.querySelector ('tbody');
        let message = document.querySelector ('#results .message');
        
        function handleResults(results){
            message.innerHTML = results.length + ' songs found';
            let html = '';
            for(let row of results){
                html += '<tr>';
                ///
                html += '</tr>';
                tblBody.innerHTML;
            }
        }
        frmSearch.addEventListener('click', function(e){
            e.preventDefault();
            let valSearch = inpArtist.value;
            spinner.classList.remove('hidden');

            let url = `https://www.songsterr.com/a/ra/songs/byartists.json?artists=${valSearch}`;
            // AJAX call
            fetch(url)
            // handle response 
            .then(function(resp){
                return resp.json();
            })
            // handle response data
            .then(function handleSuccess(data){
                handleResults(data);
            })
            .catch(function(err) {
                console.log('Request failed', err)
            });
        });
    })
})();