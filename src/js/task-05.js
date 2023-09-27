const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', (evt) => {
  if (!evt.target.value) {
    return outputRef.textContent = 'Anonymous';
  }
  outputRef.textContent = evt.target.value
})