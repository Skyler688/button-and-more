let clicks = document.getElementById("clicks");
let colorValues = document.getElementById("colorOutput");
const red = document.getElementById("rangeRed");
const green = document.getElementById("rangeGreen");
const blue = document.getElementById("rangeBlue");

let numOfClicks = 0;

function btnPressed() {
  numOfClicks += 1;
  //   console.log(numOfClicks);
  clicks.textContent = numOfClicks;
}

function backgroundColor() {
  const r = red.value;
  const g = green.value;
  const b = blue.value;

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  document.documentElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  colorValues.textContent = `: rgb(${r},${g},${b})`;
}

red.addEventListener("input", backgroundColor);
green.addEventListener("input", backgroundColor);
blue.addEventListener("input", backgroundColor);
