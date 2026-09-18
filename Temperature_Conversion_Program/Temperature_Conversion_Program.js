const inputbox = document.getElementById("input-box");
const F_to_C_button = document.getElementById("F-to-C-button");
const C_to_F_button = document.getElementById("C-to-F-button");
const convert_button = document.getElementById("submit-button");
const message = document.getElementById("output-message");

convert_button.onclick = convert;

function FtoC(temp) {
  return Number((temp - 32) / (9 / 5)).toFixed(1);
}

function CtoF(temp) {
  return Number(temp * (9 / 5) - 32).toFixed(1);
}
function convert() {
  let temp = Number(inputbox.value);
  let result;
  if (F_to_C_button.checked) {
    result = FtoC(temp);
    message.textContent = `${temp}°F is ${result}°C`;
  } else if (C_to_F_button.checked) {
    result = CtoF(temp);
    message.textContent = `${temp}°C is ${result}°F`;
  } else {
    message.textContent = "Please choose an option";
  }
}
