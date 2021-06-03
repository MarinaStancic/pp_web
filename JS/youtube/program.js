var key = "AIzaSyDG9N2NgIumXj-jwrrSTjf1cQ_uW1PcFtA";
var input = document.querySelector('input');
var button = document.querySelector('button');
var main = document.querySelector('main');

function createVideo(video) {
    var vd = document.createElement('div');
    var img = document.createElement('img');
    var title = document.createElement('h5');

    img.setAttribute('src', video.snippet.thumbnails.default.url);
    title.textContent = video.snippet.title;

    vd.appendChild(img);
    vd.appendChild(title);

    main.appendChild(vd);
}

function createVideos(videos) {
    videos.forEach(video => createVideo(video))
}

function getInfo(e) {
    var req = new XMLHttpRequest()
    req.open('GET', `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input.value}&maxResults=15&key=${key}`)
    req.onload = function () {
        createVideos(JSON.parse(req.responseText).items)
    }
    req.send();
}

button.addEventListener('click', getInfo)
