const counter = document.querySelector(".Counter")
const increment = document.querySelector(".increment")
const reset = document.querySelector(".reset")
const decrement = document.querySelector(".decrement")
const button = document.querySelector(".buttons-container")


let sum = localStorage.getItem("counterValue") || 0;
counter.textContent = sum;
 
button.addEventListener('click',function(e){
    if (e.target.classList.contains('increment')) {
        sum++;
        counter.textContent= sum;
        counter.style.color = '#508D69'
    }
    if (e.target.classList.contains('decrement')) {
        sum--;
        checkzero()
        counter.textContent= sum;
        counter.style.color = '#B31312'
        
    }
    if (e.target.classList.contains('reset')) {
        sum = 0;
        counter.textContent= 0 ;
        counter.style.color = '#B31312'
    }
    localStorage.setItem("counterValue", sum)
})

function checkzero() {
    if (sum <= 0) {
        sum = 0;
        counter.textContent= 0 ;
    }
}