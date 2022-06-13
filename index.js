const submitBtn = document.getElementById("submit_btn");
const userName = document.getElementById("name");
const emailAddress = document.getElementById("email");
const warning = document.getElementById("warning");
userName.addEventListener("keydown", (e) => {
  e.target.value.length < 7
    ? (warning.textContent = "Name invalid \n cannot be less than 7 characters")
    : (warning.textContent = "Full Name valid");
});
