const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector("#ingredients")

// function insert(ingredients) {
// const ress =  ingredients.reduce((acc, ingr) => {

//   const item = document.createElement("li")
//   item.classList.add("item");
//   item.textContent = ingr;
// return item;
// },"")
// return ress;
// }

// const elements = insert(ingredients);
// console.log(elements)

// ingredientsUl.append(elements)
// console.log(insert(ingredients))
//
//
//
const rendos = ingredients.map(el => {
  const item = document.createElement("li")
  item.classList.add("item");
  item.textContent = el;
  return item;
})


ingredientsUl.append(...rendos)

