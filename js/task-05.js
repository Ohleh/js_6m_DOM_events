const inputEvent = document.querySelector("#name-input")
const outputAction = document.querySelector("#name-output")
const Anonymous = "Anonymous";

inputEvent.addEventListener("input", handleInput);

function handleInput(e) {

    outputAction.textContent = e.target.value;
    if (!outputAction.textContent) {
        outputAction.textContent = Anonymous;
    }
    
}