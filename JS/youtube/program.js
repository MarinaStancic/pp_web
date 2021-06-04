var key = "AIzaSyBEcnfhyJiTq32EiZGRHKjPm6vGBTuQyhU";
var input = document.querySelector('input');
var button = document.querySelector('button');
var main = document.querySelector('main');
var preview = document.querySelector('#preview');


function openVideo(videoId) {
    preview.classList.add('visible');
    preview.setAttribute('src', `https://www.youtube.com/embed/${videoId}`);

}

function createVideo(video) {
    var vd = document.createElement('div');
    var img = document.createElement('img');
    var title = document.createElement('h5');
    var desc = document.createElement('p');

    img.setAttribute('src', video.snippet.thumbnails.default.url);
    title.textContent = video.snippet.title;
    desc.textContent = video.snippet.description;
    vd.appendChild(img);
    vd.appendChild(title);
    vd.appendChild(desc)
    vd.addEventListener("click", () => {
        openVideo(video.id.videoId);
        getInfo(video.id.videoId);
    });
    main.appendChild(vd);
}

function createVideos(videos) {
    videos.forEach(video => createVideo(video))
}

function getInfo(id) {
    var req = new XMLHttpRequest()
    var defaultUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input.value}&maxResults=15&key=${key}`;
    var relatedUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input.value}&maxResults=15&key=${key}`;
    req.open('GET', id ? relatedUrl : defaultUrl)
    req.onload = function () {
        createVideos(JSON.parse(req.responseText).items)
    }
    req.send();
}

button.addEventListener('click', getInfo)
