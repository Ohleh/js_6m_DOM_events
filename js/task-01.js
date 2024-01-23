const categories = document.querySelector("#categories");

console.log("Number of categories:", categories.children.length)
console.log("//")
console.log("Category:", categories.firstElementChild.firstChild.nextSibling.textContent)
console.log("Elements:", categories.firstElementChild.firstElementChild.nextElementSibling.children.length)
console.log("Elements:", categories.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.textContent)
console.log("Elements:", categories.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.textContent)
console.log("Elements:", categories.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.textContent)
console.log("Elements:", categories.firstElementChild.firstElementChild.nextElementSibling.lastElementChild.textContent)

console.log("//")
console.log("Category:", categories.firstElementChild.nextElementSibling.firstElementChild.textContent)
console.log("Elements:", categories.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.children.length)
console.log("//")
console.log("Category:", categories.lastElementChild.firstElementChild.textContent)
console.log("Elements:", categories.lastElementChild.firstElementChild.nextElementSibling.children.length)



