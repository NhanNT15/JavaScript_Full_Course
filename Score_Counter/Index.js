const scoreA = document.getElementById("scoreA");
const plusbuttonA = document.getElementById("plus-buttonA");
const resetbuttonA = document.getElementById("reset-buttonA");
const minusbuttonA = document.getElementById("minus-buttonA");

const scoreB = document.getElementById("scoreB");
const plusbuttonB = document.getElementById("plus-buttonB");
const resetbuttonB = document.getElementById("reset-buttonB");
const minusbuttonB = document.getElementById("minus-buttonB");

let countA = 0;
let countB = 0;
let winner;

plusbuttonA.onclick = function () {
  countA += 1;
  scoreA.textContent = countA;
  setTimeout(function () {
    if (countA == 21 && countB < 21) {
      alert("TEAM A won the match");
    }
  }, 0);
};

minusbuttonA.onclick = function () {
  if (countA > 0) {
    countA -= 1;
  }
  scoreA.textContent = countA;
};

resetbuttonA.onclick = function () {
  countA = 0;
  scoreA.textContent = countA;
};

plusbuttonB.onclick = function () {
  countB += 1;
  scoreB.textContent = countB;

  setTimeout(function () {
    if (countB == 21 && countA < 21) {
      alert("TEAM B won the match");
    }
  }, 0);
};

minusbuttonB.onclick = function () {
  if (countB > 0) {
    countB -= 1;
  }
  scoreB.textContent = countB;
};

resetbuttonB.onclick = function () {
  countB = 0;
  scoreB.textContent = countB;
};
