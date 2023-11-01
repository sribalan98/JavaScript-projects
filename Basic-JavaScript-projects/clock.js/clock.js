let ampm = document.getElementById("ampm");

function myclock() {
  let Clock = new Date();
  let hr = Clock.getHours();
  let min = Clock.getMinutes();
  let sec = Clock.getSeconds();
  if (hr > 12) {
    hr - 12;
    ampm.innerHTML = "PM";
  }
  document.getElementById("hours").innerHTML = padzero(hr);
  document.getElementById("mins").innerHTML = padzero(min);
  document.getElementById("secound").innerHTML = padzero(sec);
}
function padzero(num) {
  return num < 10 ? "0" + num : num;
}
setInterval(myclock, 500);
