const submitBtn = document.getElementById("submit_btn");
const userName = document.getElementById("name");
const emailAddress = document.getElementById("email");
const warning = document.getElementById("warning");
userName.addEventListener("keydown", (e) => {
  if (e.target.value.length < 7) {
    warning.textContent = "Name\n cannot be less than 7 characters";
    e.target.style.borderBottom = "3px solid rgb(255, 165, 80)";
  } else {
    warning.textContent = "Full Name valid";
    e.target.setAttribute("style", "borderBottom:3px solid rgb(80, 255, 118");
  }
});
