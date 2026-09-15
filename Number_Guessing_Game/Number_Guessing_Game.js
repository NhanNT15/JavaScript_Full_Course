//This is a demo script to practice input & random number. So the logic is just basic.
const min_input = document.getElementById("min-input");
const max_input = document.getElementById("max-input");
const ans_input = document.getElementById("ans-input");
const noti_output = document.getElementById("noti-output");
const generate_button = document.getElementById("generate-button");
const ans_submit = document.getElementById("ans-submit");

let targetNumber;
let my_ans;

function generateRandomNum() {
  const min = Number(min_input.value);
  const max = Number(max_input.value);
  targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(targetNumber);
}

function checkAnswer() {
  my_ans = Number(ans_input.value);
  if (my_ans > targetNumber) {
    noti_output.textContent = "Lower Baby :)";
  } else if (my_ans < targetNumber) {
    noti_output.textContent = "Higher Baby :)";
  } else {
    noti_output.textContent = "That's right, you're correct!";
  }
}

generate_button.onclick = generateRandomNum;
ans_submit.onclick = checkAnswer;
