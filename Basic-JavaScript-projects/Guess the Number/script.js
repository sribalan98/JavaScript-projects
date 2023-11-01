
var restartGame = document.getElementById('userinput').value = '';
var score = 1;
var scoreShower = document.getElementById("score");
scoreShower.textContent = 'Score is = ' + score;
var randomNumber = generateRandomNumber();
console.log(randomNumber);

function checkbtn() {
  var userEntered = Number(document.getElementById("userinput").value);
  if (score <= 10) {
    if (randomNumber == userEntered) {

      randomNumber = generateRandomNumber();
      console.log("New Generated Random Number:", randomNumber);
      score++;

      scoreShower.textContent = 'Score is = ' + score;
      document.getElementById('userinput').value = '';
    }
    else {

      randomNumber = generateRandomNumber();
      console.log("New Generated Random Number:", randomNumber);

      score--;

      scoreShower.textContent = 'Score is = ' + score;
      document.getElementById('userinput').value = '';
    }
    if (score === 10) {
      alert('You Won the Game')
      window.location.reload();
    }
    if (score === 0) {
      alert('Try again')
      window.location.reload();
    }
  }
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
