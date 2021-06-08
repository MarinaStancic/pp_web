var main = document.querySelector("main");
var container = document.querySelector("#container")

var tvShow = JSON.parse(localStorage["tvShow"]);
var title = document.getElementById("title");
title.textContent = tvShow.name;

var preview = document.createElement("div");
preview.id = "preview";
var img = document.createElement("img");
img.src = tvShow.image.original;

var desc = document.createElement("p");
desc.textContent = tvShow.summary;


function getSeasons() {
    
    var req = new XMLHttpRequest();
    req.open('GET', `http://api.tvmaze.com/shows${id}`)
    req.onload = function () {
        var tvShows = JSON.parse(req.responseText)
        tvShows.forEach(data => {
            createSeasons(data)
        });
    }
    req.send();
}




preview.appendChild(img);
container.appendChild(preview);
container.appendChild(desc);

console.log(tvShow);