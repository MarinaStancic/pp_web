// import { getData } from "./newfetch"
// getData()
var section = document.querySelector("section")
fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((data) => { console.log(data); return data.results })
    .then((data) => createCards(data))






function createPreview(data) {

    var preview = document.createElement("div");
    // preview.id = "preview";
    var img = document.createElement("img");
    img.src = data.image;
    // console.log(data);
    var name = document.createElement("h4");
    name.textContent = data.name;

    preview.appendChild(img);
    preview.appendChild(name);

    section.appendChild(preview);

}

function createCards(data) {
    data.forEach((e) => createPreview(e))
}