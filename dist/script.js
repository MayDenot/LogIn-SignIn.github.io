const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const btnLogIn = document.querySelector("#btnlogin");

console.log(form, username, password, btnLogIn);

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
