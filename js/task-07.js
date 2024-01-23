const inputSizeColour = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text")

inputSizeColour.addEventListener("input", omHandleInput)

function omHandleInput (e) {
    textSpan.style.fontSize = e.target.value
}
