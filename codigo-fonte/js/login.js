const database = JSON.parse(localStorage.getItem("database"));

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#loginForm");
    const emailField = document.querySelector("#email");
    const passwordField = document.querySelector("#senha");
    const showPassword = document.querySelector("#show-password");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailField.value;
        const senha = md5(passwordField.value);
        let message = "";

        if (testLogin(email, senha)) {
            console.log("Login efetuado com sucesso.");
            loginForm.submit();
            window.location.href = "index.html";
        }
    });

    showPassword.addEventListener("click", function() {
        if (passwordField.getAttribute("type") === "password") {
            passwordField.setAttribute("type", "text");
            passwordField.focus();
            showPassword.src = "images/eye.svg";
        } else {
            passwordField.setAttribute("type", "password");
            passwordField.focus();
            showPassword.src = "images/eye-slash.svg";
        }
    })
});

function testLogin(emailRef, passwordRef) {
    if (emailRef !== "" && passwordRef !== "") {
        for (let index = 0; index < database.length; index++) {
            if (emailRef === database[index].email &&
                passwordRef === database[index].senha) {
                    console.log("Credenciais válidas");
                    return true;
            }            
        }
        message = "E-mail ou senha inválidos. Por favor, tente novamente."
        errorMsg(message);
        console.error(message);
        return false;
        
    } else {
        message = "Por favor, insira o seu e-mail e senha.";
        errorMsg(message);
        console.error(message);
        return false;
    }
}

function errorMsg(messageRef) {
    const errorText = document.querySelector("#login-error");
    errorText.innerHTML = messageRef;
}
