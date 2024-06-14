const database = JSON.parse(localStorage.getItem("database"));
const authentication = JSON.parse(localStorage.getItem("authentication"));
const authSession = JSON.parse(sessionStorage.getItem("authSession"));

const authenticationHash = getAuthenticationHash(authSession);
if (authenticationHash !== null) {
    const containerHeaderLinks = document.querySelector(".header-links");
    const linkCadastro = document.querySelector("#link-cadastro");
    const linkLogin = document.querySelector("#link-login");

    linkCadastro.remove();
    linkLogin.remove();
}

document.addEventListener("DOMContentLoaded", function() {

});

function getAuthenticationHash(authSession) {
    console.log(authSession);
    for (let index = 0; index < authSession.length; index++) {
        return authSession[index];
    }
}
