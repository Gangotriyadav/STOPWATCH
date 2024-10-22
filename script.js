let timerdisply = document.querySelector('.timedisplay');
let stopbtn = document.getElementById("stopbtn");
let startbtn = document.getElementById("startbtn");
let resetbtn = document.getElementById("Resetbtn");

let msec = 0;
let secs = 0;
let mins = 0;

let timerID = null;

startbtn.addEventListener('click', function () {
    if (timerID !== null) {
        clearInterval(timerID);
    }
    timerID = setInterval(startTimer, 10);
});

stopbtn.addEventListener('click', function () {
    clearInterval(timerID);
});

resetbtn.addEventListener('click', function () {
    clearInterval(timerID);  
    msec = 0;
    secs = 0;
    mins = 0;
    timerdisply.innerHTML = "00 : 00 : 00";  
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = secs < 10 ? `0${secs}` : secs;
    let minString = mins < 10 ? `0${mins}` : mins;

    timerdisply.innerHTML = `${minString} : ${secString} : ${msecString}`;
}

