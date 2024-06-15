const database = JSON.parse(localStorage.getItem("database"));
const authentication = JSON.parse(localStorage.getItem("authentication"));
const authSession = JSON.parse(sessionStorage.getItem("authSession"));

$('.calendar').datepicker({
    language: "pt-BR",
    startDate: '+1d',
    multidate: true,
});

document.addEventListener("DOMContentLoaded", function() {
    const authenticationHash = getAuthenticationHash(authSession);

    let idAuthentication;
    let user;

    console.log("antes do for");
    for (let index = 0; index < authentication.length; index++) {
        if (authenticationHash === authentication[index].hash) {
            idAuthentication = authentication[index].id;
            console.log(idAuthentication);
            break;
        }
    }
    console.log("antes do for 2");
    for (let index = 0; index < database.length; index++) {
        if (idAuthentication === database[index].id) {
            user = database[index];
            console.log(user);
            break;
        }
    }
    
    const profilePicture = document.querySelector("#profile-picture");
    const title = document.querySelector("#name");
    const aboutMe = document.querySelector("#about-me");
    const logoInstagram = document.querySelector("#logo-instagram");
    const logoFacebook = document.querySelector("#logo-facebook");
    const logoTwitter = document.querySelector("#logo-twitter");
    const yearsExpValue = document.querySelector("#exp");
    const hadPet = document.querySelector("#had-pet");
    const admMedicines = document.querySelector("#adm-medicines");
    const aplShot = document.querySelector("#apl-shot");
    const radiusServiceValue = document.querySelector("#radius-service");
    const neighborhoodValue = document.querySelector("#neighborhood");

    profilePicture.setAttribute("src", user.foto);
    title.textContent = `${user.nome} ${user.sobrenome}`;
    aboutMe.textContent = `${user.sobreMim}`;
    if (user.instagram === "") {
        logoInstagram.setAttribute("style", "display: none");
    } else {
        logoInstagram.setAttribute("style", "display: inline");
    }
    if (user.Facebook === "") {
        logoFacebook.setAttribute("style", "display: none");
    } else {
        logoFacebook.setAttribute("style", "display: inline");
    }
    if (user.twitter === "") {
        logoTwitter.setAttribute("style", "display: none");
    } else {
        logoTwitter.setAttribute("style", "display: inline");
    }
    yearsExpValue.textContent = `${user.anosExp}`;

    const abilities = user.habilidades;
    if(abilities.indexOf("TUTOR") == -1) {
        hadPet.setAttribute("style", "display: none");
    } else {
        hadPet.setAttribute("style", "display: flex");
    }
    if(abilities.indexOf("MEDICAMENTOS") == -1) {
        admMedicines.setAttribute("style", "display: none");
    } else {
        admMedicines.setAttribute("style", "display: flex");
    }
    if(abilities.indexOf("INJECOES") == -1) {
        aplShot.setAttribute("style", "display: none");
    } else {
        aplShot.setAttribute("style", "display: flex");
    }

    radiusServiceValue.textContent = `${user.raioAtendimento}`;
    neighborhoodValue.textContent = `${user.localizacao}`;

    logout.addEventListener("click", function() {
        sessionStorage.clear();
        window.location.href = "index.html"
    });
});

function getAuthenticationHash(authSession) {
    if (authSession !== null) {
        for (let index = 0; index < authSession.length; index++) {
            return authSession[index];
        }
    } else {
        return false;
    }
}
