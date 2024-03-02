import { titleWinner, btn } from "./main.js";

let setter = "X";
let gameChanger = false;
const cells = [];
for (let i = 1; i <= 9; i++) {
  cells.push(document.getElementById(i.toString()));
}

const winningCombinations = [
  [cells[0], cells[1], cells[2]],
  [cells[3], cells[4], cells[5]],
  [cells[6], cells[7], cells[8]],
  [cells[0], cells[3], cells[6]],
  [cells[1], cells[4], cells[7]],
  [cells[2], cells[5], cells[8]],
  [cells[0], cells[4], cells[8]],
  [cells[2], cells[4], cells[6]],
];

btn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.target.textContent == "") {
      event.target.textContent = setter;
      if (setter == "X") {
        setter = "O";
      } else {
        setter = "X";
      }
    }
    Conformation();
  });
});

function checkDraw() {
  titleWinner.textContent = "It's a draw!";
  setTimeout(() => {
    alert("It's a draw!");
    titleWinner.textContent = "";
    for (let clearCells of winningCombinations) {
      clearCells.forEach((cell) => {
        cell.textContent = "";
        cell.style.backgroundColor = "";
        setter = "X";
      });
    }
  }, 900);
}
function Conformation() {
  if (!gameChanger) {
    let gameWon = false;

    for (let Combination of winningCombinations) {
      if (checkWinningCondition(...Combination)) {
        gameChanger = true;
        highlightCells(...Combination);
        gameWon = true;
        break;
      }
    }

    if (!gameWon && !cells.some((cell) => cell.textContent === "")) {
      gameChanger = true;
      checkDraw();
    }
  }
}

function checkWinningCondition(cell1, cell2, cell3) {
  return (
    cell1.textContent != "" &&
    cell1.textContent === cell2.textContent &&
    cell2.textContent === cell3.textContent
  );
}
function highlightCells(cell1, cell2, cell3) {
  cell1.style.backgroundColor = "green";
  cell2.style.backgroundColor = "green";
  cell3.style.backgroundColor = "green";
  titleWinner.textContent = `${cell1.textContent} has won the game!`;
  setTimeout(() => {
    alert(`${cell1.textContent} has won the game!`);
    titleWinner.textContent = "";
    gameChanger = false;
    for (let clearCells of winningCombinations) {
      clearCells.forEach((cell) => {
        cell.textContent = "";
        cell.style.backgroundColor = "";
        setter = "X";
      });
    }
  }, 900);
}
