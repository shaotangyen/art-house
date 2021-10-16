// ------------------------------ Global Variables ------------------------------
var noArtworkYetEl = document.querySelector(".no-fav-yet");
var favList = [];
var favArtworkDisplayEl = document.querySelector('#fav-artwork-list');

function renderFavArtwork() {

    for (i = 0; i < favList.length; i++) {
        var imgURL = favList[i].imgURL;
        var imgTitle = favList[i].imgTitle;
        var imgYear = favList[i].imgYear;
        var imgArtist = favList[i].imgArtist;
        var imgDesc = favList[i].imgDesc;

        var displayResultItem = document.createElement('div');
        displayResultItem.setAttribute("class", "result-item cell");

        var displayImgItem = document.createElement('img');
        displayImgItem.setAttribute("src", imgURL);
        displayImgItem.setAttribute("class", "img");

        var displayTitleItem = document.createElement('h4');
        displayTitleItem.setAttribute("class", "img-title p-3 text-center");
        displayTitleItem.textContent = imgTitle;

        var displayArtistItem = document.createElement('h5');
        displayArtistItem.setAttribute("class", "img-artist text-center");
        displayArtistItem.innerHTML = imgArtist;

        var displayYearItem = document.createElement('h5');
        displayYearItem.setAttribute("class", "img-year text-center");
        displayYearItem.innerHTML = imgYear;

        var displayDescItem = document.createElement('p');
        displayDescItem.setAttribute("class", "img-desc text-center desc");
        displayDescItem.innerHTML = imgDesc;

        var favBtn = document.createElement('button');
        //check if the artwork is already stored in fav list. If yes, add a solid star icon, if not, add a shaped star icon
        if (favList.length == 0) {
            favBtn.setAttribute("class", "button secondary large fav-btn far fa-star");
        } else {
            for (j = 0; j < favList.length; j++) {
                if (favList[j].imgTitle === imgTitle) {
                    favBtn.setAttribute("class", "button secondary large fav-btn fas fa-star");
                    break;
                } else if ((favList[j].imgTitle !== imgTitle) && (j === favList.length - 1)) {
                    favBtn.setAttribute("class", "button secondary large fav-btn far fa-star");
                    break;
                }
            }
        }

        displayResultItem.appendChild(displayImgItem);
        displayResultItem.appendChild(favBtn);
        displayResultItem.appendChild(displayTitleItem);
        displayResultItem.appendChild(displayArtistItem);
        displayResultItem.appendChild(displayYearItem);
        displayResultItem.appendChild(displayDescItem);
        favArtworkDisplayEl.appendChild(displayResultItem);

    }

}

function favBtnHandler(event) {
    var imgTitle = $(event.target).parent().children(".img-title").text();
    //if not empty, then check if title matches a title in fav list array
    //if yes, remove it from the array, if not, add it to the array
    for (i = 0; i < favList.length; i++) {
        if (favList[i].imgTitle === imgTitle) {
            favList.splice(i, 1); //remove the item from the array by index i
            $(event.target).toggleClass("far"); //toggle between add/remove shared star
            $(event.target).toggleClass("fas"); //toggle between add/remove solid star
            $(event.target).parent().remove("div");
            localStorage.setItem("fav-list", JSON.stringify(favList));
            break;
        };
    };
    if(favList.length === 0){ //if there's nothing in the array, remove the item from localstorage
        localStorage.removeItem("fav-list");
        noArtworkYetEl.textContent = "No favourites added yet 😔";
    };
}

function init() {
    var localFavList = JSON.parse(localStorage.getItem("fav-list"));
    if (localFavList !== null) {
        favList = localFavList;
        renderFavArtwork();
    } else {
        noArtworkYetEl.textContent = "No favourites added yet 😔";
    };
};

init();

// -------------------- Event Listeners -----------------------------------------
$('#fav-artwork-list').on('click', '.fav-btn', favBtnHandler);