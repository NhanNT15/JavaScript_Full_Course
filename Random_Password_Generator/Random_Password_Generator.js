const inputbox = document.getElementById("pass-length");
const uppercasebox = document.getElementById("uppercase");
const lowercasebox = document.getElementById("lowercase");
const numberbox = document.getElementById("number");
const specialcharacterbox = document.getElementById("special-character");

const generatebutton = document.getElementById("submit-button");

const messagebox = document.getElementById("message-box");

function createAllow() {
  let allowed = "";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = "0123456789";
  let specialcharacter = "!@#$%^&*";
  allowed += lowercasebox.checked ? lowercase : "";
  allowed += uppercasebox.checked ? uppercase : "";
  allowed += numberbox.checked ? number : "";
  allowed += specialcharacterbox.checked ? specialcharacter : "";
  return allowed;
}

function generatePassword() {
  let passlength = Number(inputbox.value);
  let allowed = createAllow();
  let maxrandomindex = allowed.length;
  let myPassword = "";
  for (let i = 0; i < passlength; i++) {
    let randomindex = Math.floor(Math.random() * maxrandomindex);
    myPassword += allowed.charAt(randomindex);
  }

  messagebox.textContent = `Your password is: ${myPassword}`;
}

generatebutton.onclick = generatePassword;
