function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpanRef = document.querySelector('.color');
const changeColorRef = document.querySelector('.change-color');
const bodyref = document.querySelector('body');

changeColorRef.addEventListener('click', () => {
  let getRondomColor = getRandomHexColor()
  colorSpanRef.textContent = getRondomColor
  bodyref.style.backgroundColor = getRondomColor
})




