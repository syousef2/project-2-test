function showLogin() {
  document.getElementById("login-form").syle.display = "block";
  document.getElementById("signup-form").style.display = "none";
}
function showSignup() { 
  document.getElementById("signup-form").syle.display = "block";
  document.getElementById("login-form").style.display = "none";
}

window.onload = showLogin;

