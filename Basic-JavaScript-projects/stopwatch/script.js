let sec_span = document.getElementById("sec");
let min_span = document.getElementById("min");
let hur_span = document.getElementById("hur");
let start = document.getElementById("start");
let timerstop = document.getElementById("stop")

let sec = 0;
let min = 0;
let hur = 0;
let stop = false; 
let stoptimer; 

start.addEventListener("click", () => {
  stop = !stop;
  if (stop) {
    start.textContent = 'STOP';
    timerStart();
  } else {
    clearInterval(stoptimer);
    start.textContent = 'START';
  }
});

timerstop.addEventListener('click', function() {
    sec = 0;
    min = 0;
    hur = 0;
    sec_span.textContent = '00';
    min_span.textContent = '00';
    hur_span.textContent = '00';
    clearInterval(stoptimer);
    start.textContent = 'START';
    stop = false
});

function timerStart() {
  stoptimer = setInterval(() => {
    sec++;
    sec_span.textContent = sec < 10 ? "0" + sec : sec;
    minFun();
  }, 1000);
}

function minFun() {
    if (sec >= 60) {
        min++;
        sec = 0;
        min_span.textContent = min < 10 ? "0" + min : min;
        hurFun();
      }
}

function hurFun() {
    if (min >= 60) {
        hur++;
        min = 0;
        hur_span.textContent = hur < 10 ? "0" + hur : hur;
    }
}