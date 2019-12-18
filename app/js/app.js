
const searchEl = document.querySelector('#search');
const formEl = document.querySelector('#form-box');
const searchCardsEl = document.querySelector('#card');


const getData = async () => {
    const response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=sia", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "e6f11ae435msh3846ec02e2b429fp122d4fjsncf3743784a85"
        }
    })
    .then(response => {          
            return response.json()            
        })
    .then(data => {
        console.log(data.data);

        data.data.forEach(elem => {
             const artistHTML = 
             `
        <div class="row row-cols-1 row-cols-md-2">
            <div class="col mb-4">
                <div class="card">
                    <img src="${elem.album.cover_medium}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>          `
            searchCardsEl.innerHTML += artistHTML;
            })
        })       
        .catch(err => {
            console.log(err);
        });
}

getData();

formEl.addEventListener('click', function(){
    clearCache();
    renderSearch();
    updateDisplay();
})