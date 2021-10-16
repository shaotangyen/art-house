// ------------------------------ Global Variables ------------------------------
var searchFormEl = document.getElementById("search-form");
var clearHistoryEl = document.getElementById("clear-history")
var searchDivEl = document.getElementById("search-div");
var hiddenDivEl = document.getElementById("hidden-div");
var readMoreSection = document.getElementById("read-more");
var enterArtistNameEL = document.getElementById("artist-name");
var artistNameEl = document.getElementById("result-artist-title");
var artistBioEl = document.getElementById("result-artist-bio");
var artistName = "";
var artistBio = "";
var noArtworkYetEl = document.querySelector(".display-result");
var resultDisplayEl = document.querySelector('#result-artwork-list');
var artistSearchSectionEl = document.querySelector(".artist-section");
var artistSearchSectionTitleEl = document.querySelector(".artist-section-title");
var displayNumber = 9;
var favList = [];

// ------------------------------ Artic API ------------------------------
function searchArtist(input) {
    var searchQueryURL = "https://api.artic.edu/api/v1/artworks/search?q=";
    var searchResultIDsArray = [];
    searchQueryURL += input;

    fetch(searchQueryURL)
        .then(function (response) {
            if (!response.ok) {
                renderModal("Error: " + response.status);
                throw response.json();
            }
            return response.json();
        })
        .then(function (response) {
            resultDisplayEl.innerHTML = ""; //clear item list after every search
            for (i = 0; i < response.data.length; i++) {
                searchResultIDsArray.push(response.data[i].id);
            };

            displaySearchResult(searchResultIDsArray);
        })
        .catch(function (error) {
            //Modal runs instead of alert
            renderModal("Error: " + error);
        });
}

//use IDs to get each of all image info out and store in an array
function displaySearchResult(searchResultArray) {
    var searchQueryURL = "";
    var imageIdString = "";

    for (i = 0; i < searchResultArray.length; i++) {
        imageIdString += searchResultArray[i] + ",";
    }
    imageIdString = imageIdString.substring(0, imageIdString.length - 1);// remove the last comma
    //calling image example: https://api.artic.edu/api/v1/artworks?ids=27992,28560&fields=id,title,image_id
    searchQueryURL = "https://api.artic.edu/api/v1/artworks?ids=" + imageIdString + "&fields=id,title,image_id,thumbnail,date_display,artist_title";

    fetch(searchQueryURL)
        .then(function (response) {
            if (!response.ok) {
                renderModal("Error: " + response.status);
                throw response.json();
            }
            return response.json();
        })
        .then(function (response) {
            artistName = response.data[0].artist_title;
            artistBio = getArtistWikiBio(artistName);

            //display images and result
            for (i = 0; i < displayNumber; i++) {
                var imgTitle = response.data[i].title;
                var imgURL = "https://www.artic.edu/iiif/2/" + response.data[i].image_id + "/full/843,/0/default.jpg";
                var imgYear = response.data[i].date_display;
                var imgArtist = response.data[i].artist_title;
                var imgDesc = response.data[i].thumbnail.alt_text;

                var displayResultItem = document.createElement('div');
                displayResultItem.setAttribute("class", "result-item cell");

                var displayImgItem = document.createElement('img');
                displayImgItem.setAttribute("src", imgURL);
                displayImgItem.setAttribute("class", "img");

                var displayTitleItem = document.createElement('h4');
                displayTitleItem.setAttribute("class", "img-title p-3 text-center");
                displayTitleItem.textContent = imgTitle;

                var displayArtistItem = document.createElement('h5');
                displayArtistItem.style.color = "#433C38";
                displayArtistItem.setAttribute("class", "img-artist text-center");
                displayArtistItem.innerHTML = "Artist: " + imgArtist;

                var displayYearItem = document.createElement('h5');
                displayYearItem.style.color = "#433C38";
                displayYearItem.setAttribute("class", "img-year text-center");
                displayYearItem.innerHTML = "Year: " + imgYear;

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

                resultDisplayEl.appendChild(displayResultItem);

            }
        })
        .catch(function (error) {
            renderModal("Error message: " + error);

        });
    noArtworkYetEl.style.display = "flex"; // to unhide the div
}

// ------------------------------ Wiki API ------------------------------
function getArtistWikiBio(artistName) {
    //tutorial: https://stackoverflow.com/questions/4452102/how-to-get-plain-text-out-of-wikipedia
    var artistNameWUnderscore = artistName.replace(/\s+/g, '_'); //replace space with _
    console.log(artistNameWUnderscore);
    var searchQueryURL = "https://neon-cors-proxy.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles="
        + artistNameWUnderscore +
        "&prop=extracts&exintro&explaintext=0&formatversion=2&format=json";

    fetch(searchQueryURL)
        .then(function (response) {
            if (!response.ok) {
                renderModal("Error: " + response.status);
                throw response.json();
            }
            return response.json();
        })
        .then(function (response) {
            document.getElementById("read-more-button")?.remove();
            // ? -if it doesn't exist, don't throw an error
            artistNameEl.textContent = artistName;
            var fullBio = response.query.pages[0].extract;
            // Cut biography to 500 characters 
            var shortBio = fullBio.substring(0, 500) + "...";
            // Create a read more button
            var readMoreEl = document.createElement("p");
            readMoreEl.id = "read-more-button";
            readMoreEl.textContent = "▼ Show more ▼";
            readMoreSection.appendChild(readMoreEl);
            var showLess = true;
            readMoreEl.onclick = function () {
                // Allows user to toggle between showing the long and short bio
                if (showLess) {
                    artistBioEl.textContent = fullBio;
                    readMoreEl.textContent = "▲ Show less ▲";
                    showLess = false;
                } else {
                    artistBioEl.textContent = shortBio;
                    readMoreEl.textContent = "▼ Show more ▼";
                    showLess = true;
                }
            };
            artistBioEl.textContent = shortBio;

            return response.query.pages[0].extract; //bio
        })
        .catch(function (error) {
            renderModal("Error: " + error);
        });

}

function formSubmitHandler(event) {
    event.preventDefault();
    var artistName = enterArtistNameEL.value.trim();
    if (artistName) {
        artistSearchSectionEl.classList.remove("vh-70");
        artistSearchSectionTitleEl.classList.remove("font-size-80");
        searchArtist(artistName);

    } else {
        renderModal("Please Enter Artist.");
    }
}

// -------------------- LocalStorage -----------------------------------------
function favBtnHandler(event) {

    var artworkClickedObj = {
        imgURL: $(event.target).parent().children(".img").attr('src'),
        imgTitle: $(event.target).parent().children(".img-title").text(),
        imgArtist: $(event.target).parent().children(".img-artist").text(),
        imgYear: $(event.target).parent().children(".img-year").text(),
        imgDesc: $(event.target).parent().children(".img-desc").text()
    }

    //check if image is saved in local
    //if local is empty, save it
    if (favList.length === 0) {
        favList.push(artworkClickedObj);
        $(event.target).toggleClass("far"); //toggle between add/remove
        $(event.target).toggleClass("fas"); //toggle between add/remove
        localStorage.setItem("fav-list", JSON.stringify(favList));
    } else {
        //if not empty, then check if title matches a title in fav list array
        //if yes, remove it from the array, if not, add it to the array
        for (i = 0; i < favList.length; i++) {
            if (favList[i].imgTitle === artworkClickedObj.imgTitle) {
                favList.splice(i, 1); //remove the item from the array by index i
                $(event.target).toggleClass("far"); //toggle between add/remove shared star
                $(event.target).toggleClass("fas"); //toggle between add/remove solid star
                if (favList.length !== 0) {
                    localStorage.setItem("fav-list", JSON.stringify(favList));
                } else {
                    localStorage.removeItem("fav-list"); //if array is empty, remove the item in local
                }
                break;
            } else if ((favList[i].imgTitle !== artworkClickedObj.imgTitle) && (i == favList.length - 1)) {
                favList.push(artworkClickedObj);
                $(event.target).toggleClass("far"); //toggle between add/remove
                $(event.target).toggleClass("fas"); //toggle between add/remove
                localStorage.setItem("fav-list", JSON.stringify(favList));
                break;
            }
        }
    }
}

function init() {
    noArtworkYetEl.style.display = "none";
    var localFavList = JSON.parse(localStorage.getItem("fav-list"));
    if (localFavList !== null) {
        favList = localFavList;
    }
}

init();

// -------------------- Event Listeners -----------------------------------------
searchFormEl.addEventListener('submit', formSubmitHandler);
$('#result-artwork-list').on('click', '.fav-btn', favBtnHandler);
