const controlsBoxRef = document.querySelector('#controls');
const inputRef = document.querySelector('input[data-input]');
const buttonCreateRef = document.querySelector('button[data-create]');
const buttonDestroyRef = document.querySelector('button[data-destroy]');

let quontytyInputs = 0

inputRef.addEventListener('change', (evt) => {
  quontytyInputs = parseInt(evt.target.value)
})

buttonCreateRef.addEventListener('click', () => {
  let allInputs = []
  for (let i = 0; i < quontytyInputs; i += 1) {
    const newInput = document.createElement('input');
    newInput.classList.add('input');
    newInput.style.display = 'block';
    allInputs.push(newInput)
  }
  controlsBoxRef.append(...allInputs)
})

buttonDestroyRef.addEventListener('click', () => {
  const allInputsRef = document.querySelectorAll('.input')
  for (const item of allInputsRef) {
    if (allInputsRef.length) item.remove()
  }
})

// Boxes

const boxesContainerRef = document.querySelector('#boxes');
const inputBoxRef = document.querySelector('input[data-box-input]');
const buttonCreateBoxRef = document.querySelector('button[data-box-create]');
const buttonDestroyBoxRef = document.querySelector('button[data-box-destroy]');

let quontytyBoxes = 0

inputBoxRef.addEventListener('input', (evt) => {
  quontytyBoxes = parseInt(evt.target.value)
  console.log(quontytyBoxes)
})

const createBoxes = (amount) => {
  remuveBoxes()
  let boxes = []

  const lastElementSize = () => {
    let boxSizePx = boxes.find((item, index, arr) => index === arr.length - 1).style.width
    let correctSize = parseInt(boxSizePx.slice(0, (boxSizePx.length - 2)))
    return correctSize
  }

  for (let i = 0; i < amount; i += 1) {
    if (!boxes.length) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('box');
      newDiv.style.width = '30px';
      newDiv.style.height = '30px';
      newDiv.style.backgroundColor = getRandomHexColor()
      boxes.push(newDiv)
    }

    else {
      const newDiv = document.createElement('div');
      newDiv.classList.add('box');
      newDiv.style.width = lastElementSize() + 10 + 'px';
      newDiv.style.height = lastElementSize() + 10 + 'px';
      newDiv.style.backgroundColor = getRandomHexColor()
      boxes.push(newDiv)
    }
  }
  boxesContainerRef.append(...boxes)
}

const remuveBoxes = () => {
  const boxesRef = document.querySelectorAll('.box')
  for (const item of boxesRef) {
    if (boxesRef.length) item.remove()
  }
}

buttonCreateBoxRef.addEventListener('click', () => createBoxes(quontytyBoxes))
buttonDestroyBoxRef.addEventListener('click', () => remuveBoxes())

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


