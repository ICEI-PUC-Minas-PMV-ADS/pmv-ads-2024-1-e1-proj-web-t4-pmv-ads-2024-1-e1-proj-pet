const database = JSON.parse(localStorage.getItem("database"));

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#loginForm");
    const emailField = document.querySelector("#email");
    const passwordField = document.querySelector("#senha");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailField.value;
        const senha = md5(passwordField.value);

        if (testLogin(email, senha)) {
            console.log("Login efetuado com sucesso.");
            loginForm.submit();
            window.location.href = "index.html";
        } else {
            console.error("E-mail ou senha inválidos. Por favor, tente novamente");
        }
    });
});

function testLogin(emailRef, passwordRef) {
    for (let index = 0; index < database.length; index++) {
        if (emailRef === database[index].email &&
            passwordRef === database[index].senha) {
                console.log("Credenciais válidas");
                return true;
        }
        
    }
    console.error("Credenciais inválidas");
    return false;
}
