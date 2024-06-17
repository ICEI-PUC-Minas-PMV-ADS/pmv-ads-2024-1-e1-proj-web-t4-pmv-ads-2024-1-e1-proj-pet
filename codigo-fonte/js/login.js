const database = JSON.parse(localStorage.getItem("database"));
const authentication = JSON.parse(localStorage.getItem("authentication"));
const authSession = JSON.parse(sessionStorage.getItem("authSession"));

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#loginForm");
    const emailField = document.querySelector("#email");
    const passwordField = document.querySelector("#senha");
    const showPassword = document.querySelector("#show-password");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailField.value;
        const senha = passwordField.value;
        const senhaMD5 = md5(passwordField.value);
        let message = "";

        if (testLogin(email, senhaMD5)) {
            const authSessionHash = authHashGenerator(email, senha);
            authSession.push(authSessionHash);
            sessionStorage.setItem("authSession", JSON.stringify(authSession))

            loginForm.submit();
            window.location.href = "index.html";
        }
    });

    showPassword.addEventListener("click", function() {
        if (passwordField.getAttribute("type") === "password") {
            passwordField.setAttribute("type", "text");
            passwordField.focus();
            showPassword.src = "images/eye-slash.svg";
        } else {
            passwordField.setAttribute("type", "password");
            passwordField.focus();
            showPassword.src = "images/eye.svg";
        }
    })
});

function testLogin(emailRef, passwordRef) {
    if (emailRef !== "" && passwordRef !== "") {
        for (let index = 0; index < database.length; index++) {
            if (emailRef === database[index].email &&
                passwordRef === database[index].senha) {
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

function authHashGenerator(emailRef, passwordRef) {
    let id = 0;
    for (let index = 0; index < database.length; index++) {
        if (emailRef === database[index].email) {
            id = database[index].id;
        }
    }
    return md5(id + emailRef + passwordRef);
}

function errorMsg(messageRef) {
    const errorText = document.querySelector("#login-error");
    errorText.innerHTML = messageRef;
}
