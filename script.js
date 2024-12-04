let timerDisplay = document.querySelector('.timerDisplay');
let StartBtn = document.getElementById('StartBtn');
let StopBtn = document.getElementById('StopBtn');
let ResetBtn = document.getElementById('ResetBtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

StartBtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(starttimer, 10);
});

StopBtn.addEventListener('click', function () {
    clearInterval(timerId);
});

ResetBtn.addEventListener('click', function () {
    clearInterval(timerId);
    msec = 0;
    secs = 0;
    mins = 0;
    timerDisplay.innerHTML = `00:00:00`;
});

function starttimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }
    let msecsString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString}:${secsString}:${msecsString}`;
}

