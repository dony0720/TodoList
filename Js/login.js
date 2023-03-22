const login_form = document.querySelector("#login-form");
const login_input = document.querySelector("#login-form #name");
const login_button = document.querySelector("#login-form #submit");
const greeting = document.querySelector("#greeting");
const hidden = "hidden"

function onLogin(event){
    event.preventDefault();
    const username = login_input.value;
    login_form.classList.add(hidden);
    localStorage.setItem("username", username); 
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(hidden);
  }

const savedUsername = localStorage.getItem("username");

if (savedUsername == null) {
    login_form.classList.remove(hidden);
    login_form.addEventListener("submit", onLogin);
} 
else {
  paintGreetings(savedUsername);
}

