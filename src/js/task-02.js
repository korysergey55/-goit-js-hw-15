const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('#ingredients')

const markup = (items) => {
  const elements = items.map((item) => {
    const listItem = document.createElement('li')
    listItem.textContent = item
    listItem.classList = item
    return listItem
  })
  ulRef.append(...elements)
}
markup(ingredients)
