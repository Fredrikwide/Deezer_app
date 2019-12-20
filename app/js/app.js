const searchEl = document.querySelector('#search');
const formEl = document.querySelector('#form-box');
const buttonEl =document.querySelector('#btn-find');
const displayEl = document.querySelector('#display');


let search = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchEl.value}`;

let clearResult = 0;

const getData = async () => {
    const response = await fetch(search, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "2840ee81ecmsha6d19635125141ap16982fjsn1e3d497e0d31"
        }
    })
    .then(respone =>  response.json())
    .then(data => {
      
            searchResult.data.forEach(data => {

                const musicHtml = 
                `
                <div class="card" style="width: 18rem;">
                    <img src="${data.album.cover_medium}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h3 class="card-title">${data.artist.name}</h3>
                            <h5 class="card-title"><i class="fas fa-music"></i> ${data.title}</h5>
                            <h5 class="card-title"><i class="fas fa-record-vinyl"></i> ${data.album.title}</h5>
                        </div>
                </div>

                `;
                        displayEl.innerHTML += musicHtml;
            });
        
            clearResult++;
            console.log(clearResult)
            
        });    
    };
    
getData();


formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    getData().catch(err=>{
        searchEl.innerHTML = `
        <div class="alert alert-warning">
                ${err}
        </div>
        
        `;
    });
});