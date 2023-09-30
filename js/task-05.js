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

const createBoxes = (amount) => {
  destroyBoxes()
  let boxes = []

  let sizes = 30
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    newDiv.style.width = `${sizes}px`;
    newDiv.style.height = `${sizes}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    boxes.push(newDiv);
    sizes += 10;
  }
  boxesContainerRef.append(...boxes)
}

const destroyBoxes = () => {
  boxesContainerRef.innerHTML = ''
}

buttonCreateBoxRef.addEventListener('click', () => {
  const inputValue = parseInt(inputBoxRef.value)
  createBoxes(inputValue)
})

buttonDestroyBoxRef.addEventListener('click', () => destroyBoxes())

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


