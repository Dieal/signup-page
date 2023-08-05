// Check if the passwords match
passwordInputs = document.querySelectorAll("input[type='password'");
password = document.querySelector("#password");
confirmPassword = document.querySelector("#confirm-password");

passwordInputs.forEach(input => input.onchange = checkPasswords);

function checkPasswords(e) {
    if (password.value === confirmPassword.value) {
        passwordInputs.forEach(input => input.classList.remove("error"));
    } else {
        passwordInputs.forEach(input => input.classList.add("error"));
    }
}