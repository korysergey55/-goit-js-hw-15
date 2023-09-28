const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
console.log(textRef)


inputRef.addEventListener('input', (evt) => {
  evt.target.value
  console.log(evt.target.value)
  textRef.style.fontSize = evt.target.value + 'px'

})