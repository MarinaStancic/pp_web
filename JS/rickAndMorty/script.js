var main = document.querySelector('main');
var container = document.querySelector('.container')

import { getData } from './fetch.js';

getData().then(arr => arr.forEach(element => {
    createPreview(element)
}))

function createPreview(data) {
    
    var preview = document.createElement("div");
    preview.id = "preview";
    var img = document.createElement("img");
    img.src = data.image;
    console.log(data);
    var name = document.createElement("h4");
    name.textContent = data.name;

    preview.appendChild(img);
    preview.appendChild(name);

    container.appendChild(preview);

}
