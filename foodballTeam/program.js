/**
 * Ovde ispod cu napraviti profile igraca
 */

messi = {
    img: "./messi.jpeg",
    name: "Leo Messi",
    position: "Forward",
    number: 1
}
terStegen = {
    img: "./terStegen.jpeg",
    name: "Ter Stegen",
    position: "Goalkeeper",
    number: 2
}
ansu = {
    img: "./ansu.jpeg",
    name: "Ansu Fati",
    position: "Forward",
    number: 3
}
dembele = {
    img: "./dembele.jpeg",
    name: "Dembele",
    position: "Forward",
    number: 4
}
pique = {
    img: "./pique.jpeg",
    name: "Gerard Pique",
    position: "Forward",
    number: 5
}
pedri = {
    img: "./pedri.jpeg",
    name: "Pedri",
    position: "Forward",
    number: 6
}
moriba = {
    img: "./moriba.jpeg",
    name: "Moriba",
    position: "Midfielder",
    number: 7
}
deJong = {
    img: "./deJong.jpeg",
    name: "De Jong",
    position: "Midfielder",
    number: 8
}
alba = {
    img: "./alba.jpeg",
    name: "Jordi Alba",
    position: "Defender",
    number: 9
}
umtiti = {
    img: "./umtiti.jpeg",
    name: "Umtiti",
    position: "Defender",
    number: 10
}
neto = {
    img: "./neto.jpeg",
    name: "Neto",
    position: "Goalkeeper",
    number: 11
}
coutinho = {
    img: "./kutinjo.jpeg",
    name: "Coutinho",
    position: "Midfielder",
    number: 12
}
griezmann = {
    img: "./griezmann.jpeg",
    name: "Griezmann",
    position: "Forward",
    number: 13
}
busquets = {
    img: "./sergio.jpeg",
    name: "Busquets",
    position: "Midfielder",
    number: 14
}
pjanic = {
    img: "./pjanic.jpeg",
    name: "Pjanic",
    position: "Defender",
    number: 15
}

var tim = [messi, terStegen, ansu, dembele, pique, pedri, moriba, deJong, alba, umtiti, neto, coutinho, griezmann, busquets, pjanic];
var klupa = [];

//random uzmemo 4 elementa iz var tim i ostavimo ih u var klupa, i obrisemo ih iz var tim

function randomNum(arr) {
    var randomIndex = Math.random() * arr.length //uzima random index u zavisnosti od duzine niza
    var floor = Math.floor(randomIndex)  //uzima donju vredost decimalnog broja
    var element = arr[floor]  //definisemo element niza
    return element
}
for (let i = 0; i < 4; i++) {
    var a = randomNum(tim);  //vrednost var a je randomNum od niza
    klupa.push(a) //pusovala sam jedan element u array
    var index = tim.indexOf(a) //vrednost var index je index od nekog elementa niza
    tim.splice(index, 1)    //jedan element brisemo iz niza uz pomoc njegovog indexa
}

var timContainer = document.getElementById('prvi-tim')  //vrednost var je element sa id prvi-tim

for (let i = 0; i < tim.length; i++) {
    var element = tim[i]; // vrednost var je element niza
    createProfile(element, timContainer) //napravili smo li tag tako sto smo prosledili element niza i tim kontenjer
}

var klupaContainer = document.getElementById('izmena')

for (let i = 0; i < klupa.length; i++) {
    var element = klupa[i];
    createProfile(element, klupaContainer);
}

function createProfile(e, container) {
    //create div profile-parent
    var divProfile = document.createElement('div')
    divProfile.id = "profile"
    //create img-child
    var imgProfile = document.createElement('img')
    imgProfile.src = e.img
    //create div info-child,parent
    var divInfo = document.createElement('div')
    divInfo.id = "info"
    //create p-child
    var name = document.createElement('p')
    var position = document.createElement('p')
    var number = document.createElement('p')
    name.textContent = e.name
    position.textContent = e.position
    number.textContent = e.number
    //pravim div profile container
    divProfile.appendChild(imgProfile)
    divInfo.appendChild(name)
    divInfo.appendChild(position)
    divInfo.appendChild(number)
    divProfile.appendChild(divInfo)
    container.appendChild(divProfile)
}

