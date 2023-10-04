const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");
function check() {
  if (password.value === passwordConfirm.value) {
    passwordConfirm.setCustomValidity("");
    console.log("correct");
  } else {
    console.log("wrong");
    passwordConfirm.setCustomValidity("Password do not match");
  }
}
