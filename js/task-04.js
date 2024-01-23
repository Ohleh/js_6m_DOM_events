const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

const value = document.querySelector("#value");
let counterValue = 0;

decrementBtn.addEventListener("click", decrementOn)
incrementBtn.addEventListener("click", incrementOn)

function decrementOn() {
     counterValue -=1;
     value.textContent = counterValue;
     console.log(decrementBtn.dataset.action); //save
}

function incrementOn() {
     counterValue +=1;
    value.textContent = counterValue;
    console.log(incrementBtn.dataset.action); //close
}

