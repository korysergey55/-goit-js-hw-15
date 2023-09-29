const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', (evt) => {
  let userField = {}
  evt.preventDefault()

  // for (let item of evt.target.elements) {
  //   if (item.type !== 'submit' && !item.value.length) {
  //     alert(`All fields must be completed! Please complete - '${item.name}' field.`)
  //   }
  //   if (item.type !== 'submit') {
  //     userField[item.name] = item.value
  //   }
  // }

  if (!formRef.email.value.length || !formRef.password.value.length) {
    alert(`All fields must be completed!`)
    return
  }
  userField = { email: formRef.email.value, password: formRef.password.value }
  console.log('User form value', userField)
  formRef.reset()
})
