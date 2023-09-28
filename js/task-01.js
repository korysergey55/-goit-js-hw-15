const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', (evt) => {
  const inputLength = parseInt(inputRef.dataset.length)
  if (evt.target.value.length === inputLength) {
    inputRef.classList.remove('invalid')
    inputRef.classList.add('valid')
  } else {
    inputRef.classList.remove('valid')
    inputRef.classList.add('invalid')
  }
})

