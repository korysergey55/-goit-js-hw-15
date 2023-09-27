const categoriesRef = document.querySelector('#categories')
const quantyty = categoriesRef.children.length
console.log(`Number of categories: ${quantyty}`)


const allLiRef = document.querySelectorAll('.item')
const print = allLiRef.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`)
  console.log(`Elements: ${item.lastElementChild.children.length}`)
});