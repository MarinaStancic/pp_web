var input = document.querySelector('input')

function getUser(event) {
    var req = new XMLHttpRequest;
    if (event.keyCode === 13) {
        var content = input.value
        input.value = ''
        req.open('GET', 'https://api.github.com/search/users?q=pera&sort=joined&per_page=20')
        req.onload = function () {
            var data = JSON.parse(req.responseText).items;
            createUser(data)
        }
        req.send()
    }
}

input.addEventListener('keypress', getUser)

function createUser(data) {
    for (let i = 0; i < data.length; i++) {
        var body = document.querySelector('body')
        var main = document.querySelector('div')
        main.setAttribute('class', 'container')
        var image = document.createElement('img')
        image.setAttribute('src', data[i].avatar_url)
        var name = document.createElement('p')
        name.textContent = data[i].login
        body.appendChild(main)
        main.appendChild(image)
    }
}

