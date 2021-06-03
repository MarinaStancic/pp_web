var button = document.querySelector('button');
var body = document.querySelector('body');
var image = document.createElement('img');

function getData() {
    var req = new XMLHttpRequest()
    req.open('GET', 'https://dog.ceo/api/breeds/image/random')
    console.log(req);
    req.send()

    req.onload = function () {
        if (req.status >= 200 && req.status < 400) {
            var data = JSON.parse(req.responseText);
            createDog(data)
        }
    }

}

function createDog(data) {
    image.setAttribute('src', data.message);
    body.appendChild(image);
}

button.addEventListener('click', getData)