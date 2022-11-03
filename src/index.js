import "./styles.css";

const sq1 = document.getElementById("square1");
const sq2 = document.getElementById("square2");
const sq3 = document.getElementById("square3");
const sq4 = document.getElementById("square4");
const sq5 = document.getElementById("square5");
const sq6 = document.getElementById("square6");
const sq7 = document.getElementById("square7");
const sq8 = document.getElementById("square8");
const sq9 = document.getElementById("square9");

const message = document.getElementById("message");
const btnIniciar = document.getElementById("play");
const btnReset = document.getElementById("reset");

const arr = [
  [sq1, sq2, sq3],
  [sq4, sq5, sq6],
  [sq7, sq8, sq9]
];

const arrColunas = [
  [sq1, sq4, sq7],
  [sq2, sq5, sq8],
  [sq3, sq6, sq9]
];

const arrDiagonal = [
  [sq1, sq5, sq9],
  [sq3, sq5, sq7]
];

let canPlay = false;

message.innerText = "Inicie o jogo";
btnIniciar.addEventListener("click", (e) => {
  e.preventDefault();
  canPlay = true;
  message.innerText = "Jogando";
});

btnReset.addEventListener("click", (e) => {
  for (let row = 0; row < arr.length; row++) {
    for (let square = 0; square < arr[row].length; square++) {
      arr[row][square].innerText = "";
    }
  }
  canPlay = false;
  message.innerText = "Inicie o jogo";
});

let player = 1;

for (let l = 0; l < arr.length; l++) {
  for (let square = 0; square < arr[l].length; square++) {
    arr[l][square].addEventListener("click", (e) => {
      if (e.target.innerText === "" && canPlay) {
        if (player === 1) {
          e.target.innerText = "X";
          player = 2;
        } else {
          e.target.innerText = "O";
          player = 1;
        }
      }
      checkWinner(arr);
      checkWinner(arrColunas);
      checkWinner(arrDiagonal);
    });
  }
}

function checkWinner(arrayzim) {
  for (let linhas = 0; linhas < arrayzim.length; linhas++) {
    if (
      arrayzim[linhas][0].innerText === arrayzim[linhas][1].innerText &&
      arrayzim[linhas][0].innerText === arrayzim[linhas][2].innerText &&
      arrayzim[linhas][0].innerText !== ""
    ) {
      message.innerText = `O elemento '${arrayzim[linhas][0].innerText}' venceu!! `;
      canPlay = false;
    }
  }
}
