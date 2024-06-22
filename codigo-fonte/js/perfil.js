const database = JSON.parse(localStorage.getItem("database"));
const authentication = JSON.parse(localStorage.getItem("authentication"));
const authenticatedSession = JSON.parse(sessionStorage.getItem("authSession"));

$('.calendar').datepicker({
    language: "pt-BR",
    startDate: '+1d',
    multidate: true,
});

document.addEventListener("DOMContentLoaded", function() {
    const authenticationHash = getAuthenticationHash(authenticatedSession);

    let idAuthentication;
    let user;

    for (let index = 0; index < authentication.length; index++) {
        if (authenticationHash === authentication[index].hash) {
            idAuthentication = authentication[index].id;
            break;
        }
    }
    for (let index = 0; index < database.length; index++) {
        if (idAuthentication === database[index].id) {
            user = database[index];
            break;
        }
    }
    
    const profilePicture = document.querySelector("#profile-picture");
    const title = document.querySelector("#name");
    const btnTop = document.querySelector("#btn-top");
    const favoriteIcon = document.querySelector("#favorite-icon");
    const aboutMe = document.querySelector("#about-me");
    const btnBottom = document.querySelector("#btn-bottom");
    const logoInstagram = document.querySelector("#logo-instagram");
    const logoFacebook = document.querySelector("#logo-facebook");
    const logoTwitter = document.querySelector("#logo-twitter");
    const yearsExpValue = document.querySelector("#exp");
    const hadPet = document.querySelector("#had-pet");
    const admMedicines = document.querySelector("#adm-medicines");
    const aplShot = document.querySelector("#apl-shot");
    const radiusServiceValue = document.querySelector("#radius-service");
    const neighborhoodValue = document.querySelector("#neighborhood");

    if (user.foto === "") {
        profilePicture.setAttribute("src", "images/user-circle.png");
    } else {
        profilePicture.setAttribute("src", user.foto);
    }
    title.textContent = `${user.nome} ${user.sobrenome}`;
    btnTop.innerHTML = "Editar";
    favoriteIcon.setAttribute("style", "display: none")
    aboutMe.textContent = `${user.sobreMim}`;
    btnBottom.innerHTML = "Editar";

    if (user.instagram === "") {
        logoInstagram.setAttribute("style", "display: none");
    } else {
        logoInstagram.setAttribute("style", "display: inline");
    }
    if (user.facebook === "") {
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

    btnTop.addEventListener("click", function(){
        window.location.href = "editarperfil.html";
    })
    
    btnBottom.addEventListener("click", function(){
        window.location.href = "editarperfil.html";
    })
});

function getAuthenticationHash(authenticatedSession) {
    if (authenticatedSession !== null) {
        for (let index = 0; index < authenticatedSession.length; index++) {
            return authenticatedSession[index];
        }
    } else {
        return false;
    }
}
