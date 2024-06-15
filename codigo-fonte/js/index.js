const database = JSON.parse(localStorage.getItem("database"));
const authentication = JSON.parse(localStorage.getItem("authentication"));
const authSession = JSON.parse(sessionStorage.getItem("authSession"));

document.addEventListener("DOMContentLoaded", function() {

    // Fazer uma lógica para pegar quem está com serPetSitter === true;
    const numRegister = document.querySelector("#num-register");
    numRegister.innerHTML = database.length;
});
