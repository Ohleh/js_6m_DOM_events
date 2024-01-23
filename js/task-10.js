const boxes = document.querySelector("#boxes")
const input = document.querySelector("input") // !! ("#controls input")
const createBtn = document.querySelector("#controls button[data-create]")
const destroyBtn = document.querySelector("#controls button[data-destroy]")
let amount = 0;
let box = [] ;

input.addEventListener("input", onInput)
createBtn.addEventListener("click", create)
destroyBtn.addEventListener("click", destroy)


function onInput(e) {
  amount = e.target.value;

}
function create () {
  createBoxes(amount);
  amount = 0;
}

function createBoxes(amount) {
  for (let i = 1, j=0; i <= amount; i++,j+=10 ) {
    box.push(`<div class="boxesDiv" style="height: ${30+j}px; width: ${30+j}px; background-color: ${getRandomHexColor()}" > ${i} </div>`);
  }
 
  boxes.insertAdjacentHTML("beforeend", box.join(""));
  box = [];
  input.value = "";
}


function destroy() {
  input.value = "";
  boxes.innerHTML = "";
  
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
