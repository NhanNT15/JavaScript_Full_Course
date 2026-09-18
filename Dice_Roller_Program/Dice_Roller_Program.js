const rollbutton = document.getElementById("roll-button");
const Dice = document.getElementById("input-box");
const image = document.getElementById("img-insert");

const text = document.getElementById("test-text");

function RollDice() {
  let numOfDice = Number(Dice.value);
  let collectedvalue = [];
  let selectedimg = [];
  if (numOfDice <= 0) {
    text.textContent = "Please choose another number";
    image.innerHTML = " ";
  } else {
    for (let i = 0; i < numOfDice; i++) {
      let randomNum = Math.floor(Math.random() * 6) + 1;
      collectedvalue.push(randomNum);
      selectedimg.push(`<img src="img_src/${randomNum}.png" />`);
    }

    text.textContent = `Dice: ${collectedvalue.join(`, `)}`;
    image.innerHTML = selectedimg.join(" ");
  }
}
rollbutton.onclick = RollDice;
