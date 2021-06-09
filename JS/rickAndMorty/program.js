import { getData } from './fetch.js';

const container = document.querySelector('.container');

getData().then(arr => arr.forEach(element => {
    console.log(element);
    createPreview(element)
}))

function createPreview(data) {
    
    var preview = document.createElement("div");
    var img = document.createElement("img");
    var footer = document.createElement("div");
    var name = document.createElement("p");
    var btn = document.createElement("button");

    preview.id = "preview";
    footer.id = "footer";
    img.src = data.image;
    name.textContent = data.name;
    btn.textContent = "Like"

    preview.appendChild(img);
    footer.appendChild(name);
    footer.appendChild(btn);
    preview.appendChild(footer);
    container.appendChild(preview);
}
