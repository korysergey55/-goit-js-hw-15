const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const { email, password } = evt.target.elements;

  if (!email.value.length || !password.value.length) {
    alert(`All fields must be completed!`)
    return
  }
  const userField = { 'email': email.value, 'password': password.value }
  console.log('User form value', userField)
  formRef.reset()
})
