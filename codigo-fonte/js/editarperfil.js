document.addEventListener("DOMContentLoaded", function() {
    const cadastros = JSON.parse(localStorage.getItem("cadastros"));
    console.log(cadastros);

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
    const btnCancel = document.querySelector("#btn-cancel");
    const btnConfirm = document.querySelector("#btn-confirm");
    const btnEdit = document.querySelector("#btn-edit");

    setFields(true);

    cadastros.forEach(cadastros => {
        if(cadastros.id === 1) {
            profilePicture.setAttribute("src", cadastros.foto);
            nameField.value = cadastros.nome;
            lastNameField.value = cadastros.sobrenome;
            addressField.value = cadastros.endereco;
            cityField.value = cadastros.cidade;
            postalCodeField.value = cadastros.cep;
            
            if(cadastros.serPetSitter) {
                petSitterOption.checked = true;
            } else {
                petSitterOption.checked = false;
            }

            emailField.value = cadastros.email;
            telField.value = cadastros.telefone;
            address2Field.value = cadastros.endereco2;
            stateField.value = cadastros.estado;
            serviceRadiusField.value = cadastros.raioAtendimento;
            aboutMeField.value = cadastros.sobreMim;
            instagramField.value = cadastros.instagram;
            facebookField.value = cadastros.facebook;
            twitterField.value = cadastros.twitter;
            priceDayField.value = cadastros.custo;
            price2DaysField.value = cadastros.custo2;
            yearsExpField.value = cadastros.anosExp;

            const abilities = cadastros.habilidades;
            if(abilities.indexOf("TUTOR") !== -1) {
                hadPetOption.checked = true;
            } else {
                hadPetOption.checked = false;
            }
            if(abilities.indexOf("MEDICAMENTOS") !== -1) {
                admMedicinesOption.checked = true;
            } else {
                admMedicinesOption.checked = false;
            }
            if(abilities.indexOf("INJECOES") !== -1) {
                aplShotsOption.checked = true;
            } else {
                aplShotsOption.checked = false;
            }
            if(abilities.indexOf("GATO") !== -1) {
                catOption.checked = true;
            } else {
                catOption.checked = false;
            }
            if(abilities.indexOf("CACHORRO") !== -1) {
                dogOption.checked = true;
            } else {
                dogOption.checked = false;
            }
            if(abilities.indexOf("PASSARO") !== -1) {
                birdOption.checked = true;
            } else {
                birdOption.checked = false;
            }
        }
    });

    petSitterOption.addEventListener("click", () => {
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
    })

    btnEdit.addEventListener("click", () => {
        setFields(false);

        btnEdit.setAttribute("style", "display: none");
        btnConfirm.setAttribute("style", "display: block");
        btnCancel.setAttribute("style", "display: block");
        btnPicture.setAttribute("style", "display: block");
    })

    btnCancel.addEventListener("click", () => {
        setFields(true);

        btnEdit.setAttribute("style", "display: block");
        btnConfirm.setAttribute("style", "display: none");
        btnCancel.setAttribute("style", "display: none");
        btnPicture.setAttribute("style", "display: none");
    })

    btnConfirm.addEventListener("click", () => {
        setFields(true);

        cadastros[0].nome = nameField.value;
        cadastros[0].sobrenome = lastNameField.value;
        cadastros[0].endereco = addressField.value;
        cadastros[0].endereco2 = address2Field.value;
        cadastros[0].cidade = cityField.value;
        cadastros[0].cep = postalCodeField.value;
        cadastros[0].email = emailField.value;
        cadastros[0].telefone = telField.value;
        cadastros[0].estado = stateField.value;
        cadastros[0].raioAtendimento = serviceRadiusField.value;
        cadastros[0].sobreMim = aboutMeField.value;
        cadastros[0].instagram = instagramField.value;
        cadastros[0].facebook = facebookField.value;
        cadastros[0].twitter = twitterField.value;
        cadastros[0].anosExp = yearsExpField.value;
        cadastros[0].custo = priceDayField.value;
        cadastros[0].custo2 = price2DaysField.value;
        localStorage.setItem("cadastros", JSON.stringify(cadastros));

        btnEdit.setAttribute("style", "display: block");
        btnConfirm.setAttribute("style", "display: none");
        btnCancel.setAttribute("style", "display: none");
        btnPicture.setAttribute("style", "display: none");

    })

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
})
