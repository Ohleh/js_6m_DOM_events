
const body = document.querySelector("body");
const buttonChgClr = document.querySelector("button.change-color")
const colorSpan = document.querySelector(".color")

buttonChgClr.addEventListener("click", OnButtonChgClr)

function OnButtonChgClr() {
  colorSpan.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}