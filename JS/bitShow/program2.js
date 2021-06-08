var tvShow = JSON.parse(localStorage["tvShow"]);
var title = document.getElementById("title");

var container = document.getElementsByClassName(".container");
var img = document.createElement("img");

title.textContent = tvShow.name;
img.src = tvShow.image.medium;

container.appendChild('img')


console.log(tvShow);