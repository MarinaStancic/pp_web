var input = document.querySelector('input');
var main = document.querySelector('main');
var mainContainer = document.querySelector('.main-container')
var preview = document.querySelector('#preview');


//first
function createPreview(datas) {
    datas.forEach(data => {
        makePreview(data)
    });
}

function makePreview(data) {

    var nekDiv = document.createElement('div')
    var movieImg = document.createElement('img');
    var movieTitle = document.createElement('h4');

    movieImg.src = data.image.medium;
    movieTitle.textContent = data.name;
    nekDiv.appendChild(movieImg);
    nekDiv.appendChild(movieTitle);

    preview.appendChild(nekDiv)
    mainContainer.appendChild(preview);
    main.appendChild(mainContainer);
}

function getInfo() {
    var req = new XMLHttpRequest()
    req.open('GET', 'http://api.tvmaze.com/shows')
    console.log(req);

    req.onload = function () {
        var datas = JSON.parse(req.responseText);
        createPreview(datas)
    }
    req.send()
}

getInfo()

//second

function dropDownList() {
    var req = new XMLHttpRequest;
    if (e.keyCode !== undefined) {
        req.open('GET', 'http://api.tvmaze.com/shows')

        req.onload = function () {
            var datas = JSON.parse(req.responseText);
        }
    }
    req.send();
}






//third

function createMovieList() {
    var req = new XMLHttpRequest;
    var movieId = data.url;
    if (e.keyCode === 13) {
        var content = input.value
        // input.value = ''
        req.open('GET', `http://api.tvmaze.com/shows${movieId}`)
        console.log(req);

        req.onload = function () {
            var datas = JSON.parse(req.responseText);
            listOfMovies(datas)
        }
        req.send()
    }

    function listOfMovies(datas) {
        datas.forEach(data => {
            makeVideo(data)
        });
    }

    function makeListOfMovies(data) {
        makePreview()
    }
}

createMovieList();
input.addEventListener('keypress', createMovieList);
