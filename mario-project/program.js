var mario = document.querySelector('.mario');
var world = document.querySelector('body');
var running = false; //def smo var i da li vrednost false
var position = 0;  //trenutna pozicija pozadine u odnosu na x osu
var int;  //definisali smo var koja prestavlja interval kojom se pozadina 'krece'
var DESNO_DUGME = 39;

document.addEventListener('keydown', startRunning); //keydown = pritisnuti taster
document.addEventListener('keyup', stopRunning);  //keyup = podignuti prst sa tastera

function startRunning(e) {
    if (e.keyCode === DESNO_DUGME && !running) {   //pita da li je running false
        mario.classList.add('running')  //u class mario dodaje class running
        int = setInterval(() => {   //var u dodeljujemo vrednost kroz fn setInterval
            position -= 7;  //smanjujemo poziciju za 5(5px po x osi)
            world.style.backgroundPosition = `${position}px bottom`;  //pristupamo var world i setujemo parametar u stilu taga(bg position) 
        }, 10) //definisemo timeout intervala(sto je br manji to je brzina veca-brzina pomeranja pozadine)
        running = true  //var running dodajemo vrednost true da bi zabranili ponovno koriscenje ove fn 
    }
}


function stopRunning(e) {
    if (e.keyCode === DESNO_DUGME && running) {
        mario.classList.remove('running')
        clearInterval(int)
        running = false
    }
}