// function trigger() {
//     console.log("Jos samo 5 nedelja!");
// }
// trigger();


// //window.navigator
// function version() {
//     console.log(window.navigator.appVersion);
// }
// version()

// function isOnline() {
//     console.log(window.navigator.onLine);
// }
// isOnline()

// function locations() {
//     console.log(window.navigator.geolocation);
// }
// locations()

// function companyCreaded() {
//     console.log(window.navigator.userAgent);
// }
// companyCreaded()

// function infoPlatfonrm() {
//     console.log(window.navigator.platform);
// }
// infoPlatfonrm()


// //window.screen
// function currentH() {
//     console.log(window.screen.availHeight);
// }
// currentH()

// function currentW() {
//     console.log(window.screen.availWidth);
// }
// currentW()

// function maxHeight() {
//     console.log(window.screen.height);
// }
// maxHeight()


// //window.location
// function fullUrl() {
//     console.log(window.location.href);
// }
// fullUrl()

// function domainName() {
//     console.log(window.location.hostname);
// }
// domainName()

// function usedProtocol() {
//     console.log(window.location.protocol);
// }
// usedProtocol()

// function partOfUrl() {
//     console.log(window.location.search);
// }
// partOfUrl()

// function reloadPage() {
//     console.log(window.location.reload());
// }
// reloadPage()

// function redirect() {
//     console.log(window.location.href = 'https://www.blic.rs/')
// }
// redirect()


// window.localStorage
// function storage() {
//     localStorage.setItem('name', 'marina');
//     console.log(window.localStorage.getItem('name'));
// }
// storage()

// function checkData() {
//     if (localStorage.getItem('name') === null) console.log("There is no data");
// }

// function removeData() {
//     localStorage.removeItem('name')
// }
// removeData()


//window.history
// function playAround() {
//     window.history.back()
//     window.history.go(-1)
// }
// playAround()



// function setColor() {
//     document.getElementById("secondList").style.backgroundColor = 'pink'
// }
// setColor()

// function selecLi() {
//     var list = document.getElementsByTagName('li')
//     for (let i = 0; i < list.length; i++) {
//         list[i].style.backgroundColor = 'darkcyan'
//     }
// }
// selecLi()

// function changeThird() {
//     var list = document.getElementById('thirdList')
//     list.style.backgroundColor = 'blue'
//     list.style.textTransform = 'upperCase'
// }
// changeThird()


// function setColorLi() {

//     var active = document.querySelector(".active");
//     active.className = "";
//     active.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.className = 'active'
// }

// setColorLi()



// function takesText() {
//     var a = document.querySelector('#first').textContent
//     alert(a)
// }
// takesText()


// function takeTextAsArgument(a) {
//     var b = document.querySelector('#forth').lastChild.textContent = a
// }

// takeTextAsArgument('nov paragraf')





// var city = ['Barcelona', 'NY', 'Doha', 'Kairo'];
// var mainDiv = document.querySelector('div')

// function createSelect(data, target) {
//     var select = document.createElement('select')

//     for (let i = 0; i < data.length; i++) {
//         var option = document.createElement('option')
//         option.textContent = data[i]
//         select.appendChild(option)
//     }
//     target.appendChild(select)
// }
// createSelect(city, mainDiv)


// var color = ['blue', 'pink', 'red'];
// var secondDiv = document.querySelector('div')

// function secondSelect(data, target) {
//     var select = document.createElement('select')

//     for (let i = 0; i < data.length; i++) {
//         var option = document.createElement('option')
//         option.textContent = data[i]
//         select.appendChild(option)
//     }
//     target.appendChild(select)
// }
// secondSelect(color, secondDiv)


// var sport = ['Tennis', 'Baseball', 'F1', 'MotoGP']
// var thirdDiv = document.querySelector('div')

// function a(data, target) {
//     var b = '<select>'
//     for (let i = 0; i < data.length; i++) {
//         b += '<option>' + data[i] + '</option>'
//     }
//     b += '<select>'
//     target.innerHTML = b
// }
// a(sport, thirdDiv)


// var header = document.querySelector('header')
// header.style.backgroundColor = 'red'


function myFunction() {
    var x = document.forms['myForm'].value
    if (x == "") {
        alert('Name must be filled out'.style.border = 'red')
        return false
    }
}