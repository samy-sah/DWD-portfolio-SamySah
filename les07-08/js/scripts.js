let base = "https://www.songsterr.com/a/ra/songs/byartists.json?artists=%22elton%20john%22";
let frmSearch = document.querySelector('#frmSearch');
let inpArtist = document.querySelector('#inpArtist');
let btnSearch = document.querySelector('#btnSearch');
let results = document.querySelector ('#results');
let spinner = document.querySelector ('#spinner');

btnSearch.addEventListener('click', function(e){
    e.preventDefault();
    let searchval = inpArtist.nodeValue;
    let params = new URLSearchParams();
    params.append('method', 'artists.songs.search');
    params.append('extras', 'url_m');
    params.append('per_page', 20);
    params.append('format', 'json');
    params.append('nojsoncallback', 1);
    params.append('api_key', '6ecfcd8d4a3b8a04da6093733db989a2');
    params.append('text', searchval);
    let url = base + params.toString();
    
    // AJAX call
    fetch(url)
    .then(function(resp){
        
    })
    .catch(function(err) {
        console.log('Request failed', err)
    });    
})