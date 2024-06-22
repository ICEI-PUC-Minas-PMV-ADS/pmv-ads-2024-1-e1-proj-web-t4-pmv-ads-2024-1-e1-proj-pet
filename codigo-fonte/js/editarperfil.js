const database = JSON.parse(localStorage.getItem("database"));
const authentication = JSON.parse(localStorage.getItem("authentication"));
const authenticatedSession = JSON.parse(sessionStorage.getItem("authSession"));

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

    const profilePicture = document.querySelector("#profile-pic");
    const nameField = document.querySelector("#name-field");
    const lastNameField = document.querySelector("#lastname-field");
    const addressField = document.querySelector("#address-field");
    const cityField = document.querySelector("#city-field");
    const postalCodeField = document.querySelector("#postal-code-field");
    const petSitterOption = document.querySelector("#pet-sitter-option");
    const emailField = document.querySelector("#email-field");
    const telField = document.querySelector("#tel-field");
    const address2Field = document.querySelector("#address2-field");
    const stateField = document.querySelector("#state-field");
    const serviceRadiusField = document.querySelector("#service-radius-field");
    const aboutMeField = document.querySelector("#about-me-field");
    const instagramField = document.querySelector("#instagram-field");
    const facebookField = document.querySelector("#facebook-field");
    const twitterField = document.querySelector("#twitter-field");
    const priceDayField = document.querySelector("#price-day");
    const price2DaysField = document.querySelector("#price-2days");
    const yearsExpField = document.querySelector("#years-field");
    const hadPetOption = document.querySelector("#had-pet");
    const admMedicinesOption = document.querySelector("#adm-medicines");
    const aplShotsOption = document.querySelector("#apl-shots");
    const catOption = document.querySelector("#cat-option");
    const dogOption = document.querySelector("#dog-option");
    const birdOption = document.querySelector("#bird-option");
    const btnPicture = document.querySelector("#btn-picture");
    const fileInput = document.querySelector("#btn-input-file");
    const btnCancel = document.querySelector("#btn-cancel");
    const btnConfirm = document.querySelector("#btn-confirm");
    const btnEdit = document.querySelector("#btn-edit");
    const btnProfile = document.querySelector("#btn-profile");
    const btnDelProfPic = document.querySelector("#delete-profile-pic");
    const checkboxes = document.querySelectorAll(`input[type="checkbox"]`);
    let checkboxesState = [];
    let profPicture = "";

    $("#tel-field").mask("(00) 00000-0000");
    $("#postal-code-field").mask("00000-000");

    setFields(true);

    if (user.foto === "") {
        profilePicture.setAttribute("src", "images/user-circle.png");
    } else {
        profilePicture.setAttribute("src", user.foto);
    }
    nameField.value = user.nome;
    lastNameField.value = user.sobrenome;
    addressField.value = user.endereco;
    cityField.value = user.cidade;
    postalCodeField.value = user.cep;

    if(user.serPetSitter) {
        petSitterOption.checked = true;
    } else {
        petSitterOption.checked = false;
    }

    emailField.value = user.email;
    telField.value = user.telefone;
    address2Field.value = user.endereco2;
    stateField.value = user.estado;
    serviceRadiusField.value = user.raioAtendimento;
    aboutMeField.value = user.sobreMim;
    instagramField.value = user.instagram;
    facebookField.value = user.facebook;
    twitterField.value = user.twitter;
    priceDayField.value = user.custo;
    price2DaysField.value = user.custo2;
    yearsExpField.value = user.anosExp;

    if(user.habilidades.indexOf("TUTOR") === -1) {
        hadPetOption.checked = false;
    } else {
        hadPetOption.checked = true;
    }
    if(user.habilidades.indexOf("MEDICAMENTOS") === -1) {
        admMedicinesOption.checked = false;
    } else {
        admMedicinesOption.checked = true;
    }
    if(user.habilidades.indexOf("INJECOES") === -1) {
        aplShotsOption.checked = false;
    } else {
        aplShotsOption.checked = true;
    }
    if(user.habilidades.indexOf("GATO") === -1) {
        catOption.checked = false;
    } else {
        catOption.checked = true;
    }
    if(user.habilidades.indexOf("CACHORRO") === -1) {
        dogOption.checked = false;
    } else {
        dogOption.checked = true;
    }
    if(user.habilidades.indexOf("PASSARO") === -1) {
        birdOption.checked = false;
    } else {
        birdOption.checked = true;
    }

    btnPicture.addEventListener("click", function() {
        fileInput.click();
    });

    fileInput.addEventListener("change", function() {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const photoBase64String = event.target.result;
                profilePicture.setAttribute("src", photoBase64String);
                profPicture = photoBase64String;
            }
            reader.readAsDataURL(file);
        }
    });

    btnDelProfPic.addEventListener("click", function() {
        profilePicture.setAttribute("src", "images/user-circle.png");
        profPicture = "images/user-circle.png";
    });

    petSitterOption.addEventListener("click", function() {
        if(petSitterOption.checked) {
            priceDayField.disabled = false;
            price2DaysField.disabled = false;
            yearsExpField.disabled = false;
            hadPetOption.disabled = false;
            admMedicinesOption.disabled = false;
            aplShotsOption.disabled = false;
            catOption.disabled = false;
            dogOption.disabled = false;
            birdOption.disabled = false;
            } else {
                priceDayField.disabled = true;
                price2DaysField.disabled = true;
                yearsExpField.disabled = true;
                hadPetOption.disabled = true;
                admMedicinesOption.disabled = true;
                aplShotsOption.disabled = true;
                catOption.disabled = true;
                dogOption.disabled = true;
                birdOption.disabled = true;
                priceDayField.value = "";
                price2DaysField.value = "";
                yearsExpField.value = "";
                hadPetOption.checked = false;
                admMedicinesOption.checked = false;
                aplShotsOption.checked = false;
                catOption.checked = false;
                dogOption.checked = false;
                birdOption.checked = false;
            }
    });

    btnEdit.addEventListener("click", function() {
        setFields(false);

        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });

        // SALVA OS ESTADOS DOS CHECKBOXES
        for (let index = 0; index < checkboxes.length; index++) {
            checkboxesState[index] = checkboxes[index].checked;
        }

        btnEdit.setAttribute("style", "display: none");
        btnProfile.setAttribute("style", "display: none");
        btnConfirm.setAttribute("style", "display: block");
        btnCancel.setAttribute("style", "display: block");
        btnPicture.setAttribute("style", "display: block");
        btnDelProfPic.setAttribute("style", "display: block");
    });

    btnProfile.addEventListener("click", function() {
        window.location.href = "perfil.html";
    });

    btnCancel.addEventListener("click", function() {
        setFields(true);

        // SE OS CHECKBOXES ESTÃO EM ESTADOS DIFERENTES DOS SALVOS, INVERTE
        for (let index = 0; index < checkboxes.length; index++) {
            if(checkboxes[index].checked !== checkboxesState[index]) {
                checkboxes[index].checked = !checkboxes[index].checked;
            }
        }

        profilePicture.setAttribute("src", user.foto);

        btnEdit.setAttribute("style", "display: block");
        btnProfile.setAttribute("style", "display: block");
        btnConfirm.setAttribute("style", "display: none");
        btnCancel.setAttribute("style", "display: none");
        btnPicture.setAttribute("style", "display: none");
        btnDelProfPic.setAttribute("style", "display: none");
    });

    btnConfirm.addEventListener("click", function() {
        setFields(true);

        if(profPicture !== "") {
            user.foto = profPicture;
        }
        user.nome = nameField.value;
        user.sobrenome = lastNameField.value;
        user.endereco = addressField.value;
        user.endereco2 = address2Field.value;
        user.cidade = cityField.value;
        user.cep = postalCodeField.value;
        user.email = emailField.value;
        user.telefone = telField.value;
        user.estado = stateField.value;
        user.raioAtendimento = serviceRadiusField.value;
        user.serPetSitter = petSitterOption.checked;
        user.sobreMim = aboutMeField.value;
        user.instagram = instagramField.value;
        user.facebook = facebookField.value;
        user.twitter = twitterField.value;
        user.anosExp = yearsExpField.value;
        user.custo = priceDayField.value;
        user.custo2 = price2DaysField.value;

        localStorage.setItem("database", JSON.stringify(database));

        btnEdit.setAttribute("style", "display: block");
        btnProfile.setAttribute("style", "display: block");
        btnConfirm.setAttribute("style", "display: none");
        btnCancel.setAttribute("style", "display: none");
        btnPicture.setAttribute("style", "display: none");
        btnDelProfPic.setAttribute("style", "display: none");

        location.reload();

    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function() {
            if (checkbox.id === "had-pet") {
                if (!checkbox.checked && user.habilidades.indexOf("TUTOR") !== -1) {
                    // OPÇÃO DESMARCADA E TEM TUTOR NA LISTA
                    let indexItem = user.habilidades.indexOf("TUTOR");
                    user.habilidades.splice(indexItem, 1);
                } else if (checkbox.checked && user.habilidades.indexOf("TUTOR") === -1) {
                    // OPÇÃO MARCADA E NÃO TEM TUTOR NA LISTA
                    user.habilidades.push("TUTOR");
                }
            }
            if (checkbox.id === "adm-medicines") {
                if (!checkbox.checked && user.habilidades.indexOf("MEDICAMENTOS") !== -1) {
                    let indexItem = user.habilidades.indexOf("MEDICAMENTOS");
                    user.habilidades.splice(indexItem, 1);
                } else if (checkbox.checked && user.habilidades.indexOf("MEDICAMENTOS") === -1) {
                    user.habilidades.push("MEDICAMENTOS");
                }
            }
            if (checkbox.id === "apl-shots") {
                if (!checkbox.checked && user.habilidades.indexOf("INJECOES") !== -1) {
                    let indexItem = user.habilidades.indexOf("INJECOES");
                    user.habilidades.splice(indexItem, 1);
                } else if (checkbox.checked && user.habilidades.indexOf("INJECOES") === -1) {
                    user.habilidades.push("INJECOES");
                }
            }
            if (checkbox.id === "cat-option") {
                if (!checkbox.checked && user.habilidades.indexOf("GATO") !== -1) {
                    let indexItem = user.habilidades.indexOf("GATO");
                    user.habilidades.splice(indexItem, 1);
                } else if (checkbox.checked && user.habilidades.indexOf("GATO") === -1) {
                    user.habilidades.push("GATO");
                }
            }
            if (checkbox.id === "dog-option") {
                if (!checkbox.checked && user.habilidades.indexOf("CACHORRO") !== -1) {
                    let indexItem = user.habilidades.indexOf("CACHORRO");
                    user.habilidades.splice(indexItem, 1);
                } else if (checkbox.checked && user.habilidades.indexOf("CACHORRO") === -1) {
                    user.habilidades.push("CACHORRO");
                }
            }
            if (checkbox.id === "bird-option") {
                if (!checkbox.checked && user.habilidades.indexOf("PASSARO") !== -1) {
                    let indexItem = user.habilidades.indexOf("PASSARO");
                    user.habilidades.splice(indexItem, 1);
                } else if (checkbox.checked && user.habilidades.indexOf("PASSARO") === -1) {
                    user.habilidades.push("PASSARO");
                }
            }
        });
    });

    function setFields(varBool) {
        nameField.disabled = varBool;
        lastNameField.disabled = varBool;
        addressField.disabled = varBool;
        cityField.disabled = varBool;
        postalCodeField.disabled = varBool;
        petSitterOption.disabled = varBool;
        emailField.disabled = varBool;
        telField.disabled = varBool;
        address2Field.disabled = varBool;
        stateField.disabled = varBool;
        serviceRadiusField.disabled = varBool;
        aboutMeField.disabled = varBool;
        instagramField.disabled = varBool;
        facebookField.disabled = varBool;
        twitterField.disabled = varBool;
        priceDayField.disabled = varBool;
        price2DaysField.disabled = varBool;
        yearsExpField.disabled = varBool;
        hadPetOption.disabled = varBool;
        admMedicinesOption.disabled = varBool;
        aplShotsOption.disabled = varBool;
        catOption.disabled = varBool;
        dogOption.disabled = varBool;
        birdOption.disabled = varBool;
    }

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
