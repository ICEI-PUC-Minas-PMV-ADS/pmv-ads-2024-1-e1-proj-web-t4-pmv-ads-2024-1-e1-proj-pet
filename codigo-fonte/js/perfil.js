$('.calendar').datepicker({
    language: "pt-BR",
    startDate: '+1d',
    multidate: true,
});

document.addEventListener("DOMContentLoaded", function() {
    const cadastros = JSON.parse(localStorage.getItem("cadastros"));
    console.log(cadastros);

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

    function setName() {
        cadastros.forEach(cadastros => {
            if(cadastros.id == 1) {
                profilePicture.setAttribute("src", "images/imgperfil1.png");
                title.textContent = `${cadastros.nome} ${cadastros.sobrenome}`;
            }
        });
    }
    
    function setAboutMe() {
        cadastros.forEach(cadastros => {
            if(cadastros.id == 1) {
                aboutMe.textContent = `${cadastros.sobreMim}`;
                if(cadastros.instagram == "") {
                    logoInstagram.setAttribute("style", "display: none");
                    } else {
                        logoInstagram.setAttribute("style", "display: inline");
                }
                if(cadastros.facebook == "") {
                    logoFacebook.setAttribute("style", "display: none");
                    } else {
                        logoFacebook.setAttribute("style", "display: inline");
                }
                if(cadastros.twitter == "") {
                    logoTwitter.setAttribute("style", "display: none");
                    } else {
                        logoTwitter.setAttribute("style", "display: inline");
                }
            }
        });
    }
    
    function setSkills() {
        cadastros.forEach(cadastros => {
            if(cadastros.id == 1) {
                yearsExpValue.textContent = `${cadastros.anosExp}`;

                const abilities = cadastros.habilidades;
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

                radiusServiceValue.textContent = `${cadastros.raioAtendimento}`;
                neighborhoodValue.textContent = `${cadastros.localizacao}`;
            }
        });
    }

    setName();
    setAboutMe();
    setSkills();
})
