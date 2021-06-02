var button = document.querySelector('btn');

function getData() {
    var req = new XMLHttpRequest()

    req.open('GET', 'https://api.github.com/search/users?q=pera&sort=joined&per_page=20')
    req.onload = function () {
        var data = JSON.parse(req.responseText)
    }
    req.send()
}
button.addEventListener('click', getData)