var key = "AIzaSyBEcnfhyJiTq32EiZGRHKjPm6vGBTuQyhU";
var input = document.querySelector('input');
var button = document.querySelector('button');
var main = document.querySelector('main');
var preview = document.querySelector('#preview');
var youtubeSearch = document.getElementById('youtubeSearch');

function getInfo(videoId) {
    var url;
    var relatedUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${key}`;
    var defaultUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input.value}&maxResults=15&key=${key}`;
    
    if (videoId instanceof MouseEvent){
        removeYoutubeClip()
        url = defaultUrl;
    } else {
        url = relatedUrl;
    }

    removeVideos();
    var req = new XMLHttpRequest()
    
    req.open('GET', url)
    req.onload = function () {
        var videos = JSON.parse(req.responseText).items;
        createVideos(videos);
    }
    req.send();
}

function createVideos(videos) {
    videos.forEach(video => {
        makeVideo(video)
    });
}

function makeVideo(video) {
    // pravimo elemente
    var videoContainer = document.createElement('div'); // vraca instancu elementa (novog)
    var videoImg = document.createElement('img');
    var videoTitle = document.createElement('h5');
    var videoDesc = document.createElement('p');

    // setujemo video id

    var videoId = video.id.videoId;

    // setujemo event listener

    videoContainer.addEventListener('click', () => {
        openVideo(videoId);
        getInfo(videoId)
    });

    // treba da popunim html elemente

    if (video.snippet === undefined) {
        return;
    }

    videoImg.src = video.snippet.thumbnails.medium.url;
    videoTitle.textContent = video.snippet.title;
    videoDesc.textContent = video.snippet.description;

    // videoContainer je parent
    videoContainer.appendChild(videoTitle);
    videoContainer.appendChild(videoImg);
    videoContainer.appendChild(videoDesc);

    main.appendChild(videoContainer)
}

function openVideo(videoId) {
    preview.classList.add("visible");
    preview.src = `https://www.youtube.com/embed/${videoId}`;
}

function removeVideos() {
    main.innerHTML = "";
}

function removeYoutubeClip() {
    preview.classList.remove('visible')
}

button.addEventListener('click', getInfo)
youtubeSearch.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        button.click()
    }
})
