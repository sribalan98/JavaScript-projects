let vNum = document.getElementById("vNum");
let incre = document.getElementById("increment");
let decre = document.getElementById("decrement");
let reset = document.getElementById("reset");


let num = 0;

incre.addEventListener("click", function () {
  num++;
  vNum.innerText = num;
});
decre.addEventListener("click", function () {
  if (num == 0) {
    vNum.innerText = 0;
  } else {
    num--;
    vNum.innerText = num;
}
});

reset.addEventListener('click',function(){
    vNum.innerText = 0;
    num = 0
})