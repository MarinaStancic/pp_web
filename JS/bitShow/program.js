var input = document.querySelector('input');
var main = document.querySelector('main');
var mainContainer = document.querySelector('.main-container')
var dropdownMenu = document.querySelector('#dropdownList')


function createPreview(data) {
    var preview = document.createElement("div");
    preview.id = "preview";
    var img = document.createElement("img");
    img.src = data.image.medium;
    var title = document.createElement("h4");
    title.textContent = data.name;

    preview.appendChild(img);
    preview.appendChild(title);

    mainContainer.appendChild(preview);

    preview.addEventListener('click', function () {
        localStorage.setItem('ID', `${data.id}`)
        openShow(data.id);
    })
}

function getTVShows() {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://api.tvmaze.com/shows')
    req.onload = function () {
        var tvShows = JSON.parse(req.responseText)
        tvShows.forEach(data => {
            createPreview(data)
        });
    }
    req.send();
}

function filterTvShows() {
    var searchView = document.getElementById("search");
    var value = searchView.value;
    var req = new XMLHttpRequest();
    req.open('GET', `http://api.tvmaze.com/search/shows?q=${value}`)
    req.onload = function () {
        var tvShowSuggestions = JSON.parse(req.responseText)
        dropdownMenu.innerHTML = ''
        tvShowSuggestions.forEach(tvShow => {
            createSuggestions(tvShow);
        })
    }
    req.send();
}

function createSuggestions(tvSuggestion) {
    var titleText = tvSuggestion.show.name
    var id = tvSuggestion.show.id
    var li = document.createElement("li")
    li.textContent = titleText;
    li.addEventListener("click", () => {
        openShow(id)
    });
    dropdownMenu.appendChild(li);
}

function openShow(showId) {
    var req = new XMLHttpRequest();
    req.open('GET', `http://api.tvmaze.com/shows/${showId}`)
    req.onload = function () {
        var show = JSON.parse(req.responseText);
        console.log(show);
        localStorage["tvShow"] = JSON.stringify(show)
        window.location = 'index2.html';
    }
    req.send();
}

getTVShows();