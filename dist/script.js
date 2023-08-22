const formLogin = document.querySelector('#form-login')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const linkLogin = document.querySelector('#link-login')
const linkSignin = document.querySelector('#link-signin')
const bodyLogin = document.querySelector('#container-login')
const bodySignin = document.querySelector('#container-signin')
// const btnLogIn = document.querySelector("#btnlogin");
// const btnSignIn = document.querySelector("#btnsignin");

formLogin.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(username.value)
  console.log(password.value)
})

// Validar el formulario
// Guardar los datos en el localStorage

linkLogin.addEventListener('click', () => {
  bodyLogin.classList.toggle('hidden')
  bodySignin.classList.remove('hidden')
})

linkSignin.addEventListener('click', () => {
  bodySignin.classList.toggle('hidden')
  bodyLogin.classList.remove('hidden')
})
