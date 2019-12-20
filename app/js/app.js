
const searchEl = document.querySelector('#search');
const formEl = document.querySelector('#form-box');
const buttonEl =document.querySelector('#btn-find');
const gridContainerEl = document.querySelector('#display');


const searchVal = searchEl.value;
const newSearchVal = "";
let searchType = "search?q=";

const getData = async () => {
    const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/"search?q="${searchEl.value}`, {
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

                    const cardsHTML =
                        `     
            <div class="card" style="width: 18rem;">
                <img src="${elem.album.cover_medium}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${elem.artist.name}</h5>
                <h5 class="card-title"><i class="fas fa-music"></i> ${elem.title}</h5>
                <h5 class="card-title">
                <i class="fas fa-record-vinyl"></i> ${elem.album.title}
                </h5>
                            </div>
                             </div>           
             `
                    gridContainerEl.innerHTML += cardsHTML;
                    
                })
            })
            .catch(err => {
                console.log(err);
            });
    }


const checkBtn = () => {

    const radBtnArtist = document.querySelector('#artist');
    const radBtnAlbum = document.querySelector('#album');
    const radBtnTracks = document.querySelector('#tracks');

    if (radBtnArtist.checked = true) {
        searchType = "artist/";
    } else if (radBtnAlbum.checked = true) {
        searchType = "album/";
    } else if (radBtnTracks.cheked = true) {
        searchType = "tracks/";
    }
    else {

    return true;
};
}

formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    checkBtn();
    getData();
});
