const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCases = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
  return lowerCases[Math.floor(Math.random() * lowerCases.length)];
}

function getUppercase() {
  return upperCases[Math.floor(Math.random() * upperCases.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  if (
    upperEl.checked ||
    lowerEl.checked ||
    symbolEl.checked ||
    numberEl.checked
  ) {
    const len = lenEl.value;

    var password = "";
    for (let i = 0; i < len; i++) {
      let x = generateX();
      password += x;
    }

    pwEl.innerText = password;
  } else {
    alert("Please check content!!!!");
  }
}

function generateX() {
  const xs = [];

  if (upperEl.checked) {
    xs.push(getUppercase());
  }
  if (lowerEl.checked) {
    xs.push(getLowercase());
  }
  if (symbolEl.checked) {
    xs.push(getSymbol());
  }
  if (numberEl.checked) {
    xs.push(getSymbol());
  }
  return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");

  const password = pwEl.innerText;
  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard!");
});
