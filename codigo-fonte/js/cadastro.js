const database = JSON.parse(localStorage.getItem("database"));
const authentication = JSON.parse(localStorage.getItem("authentication"));

document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastroForm");
    const nameField = document.querySelector("#nome");
    const emailField = document.querySelector("#email");
    const passwordField = document.querySelector("#senha");
    const confirmPasswordField = document.querySelector("#confirmarSenha");
    const showPassword = document.querySelector("#show-password");
    const showConfirmPassword = document.querySelector("#show-confirm-password");

    cadastroForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = nameField.value;
        const email = emailField.value;
        const senha = passwordField.value;
        const confirmarSenha = confirmPasswordField.value;
        let message = "";
        let idElement = "";

        if (fillName(nome) && findEmail(email) && testPassword(senha, confirmarSenha)) {
            let id = database.length + 1;
            const entryData = {
                id: id,
                email: email,
                senha: md5(senha),
                foto: "",
                nome: nome,
                sobrenome: "",
                telefone: "",
                endereco: "",
                endereco2: "",
                cidade: "",
                estado: "",
                cep: "",
                serPetSitter: false,
                raioAtendimento: 0,
                sobreMim: "",
                custo: 0,
                custo2: 0,
                anosExp: 0,
                instagram: "",
                facebook: "",
                twitter: "",
                habilidades: [],
                localizacao: "",
                dataDisponivelInicio: "2024-07-06",
                dataDisponivelTermino: "2025-10-06"
            };
            database.push(entryData);
            localStorage.setItem("database", JSON.stringify(database));

            const entryDataAuthentication = md5(id + email + senha);
            authentication.push(entryDataAuthentication);
            localStorage.setItem("authentication"), JSON.stringify(authentication);

            cadastroForm.submit();
            console.log("Usuário cadastrado com Sucesso!");

            setTimeout(function() {
                window.location.href = "login.html";
            }, 2000);

        } else {
            console.error("Cadastro do usuário não foi realizado.");
        }
    });

    nameField.addEventListener("keyup", function() {
        const errorField = document.querySelector("#error-name");
        idElement = errorField.id;
        if (nameField.value !== "" && nameField.value.length > 3) {
            message = " ";
            errorMsg(message, idElement);
        } else {
            message = "Preencha o campo nome, por favor. O nome deve ter mais de 4 caracteres."
            errorMsg(message, idElement);
        }
    })

    confirmPasswordField.addEventListener("keyup", function() {
        const errorField = document.querySelector("#error-password");
        idElement = errorField.id;
        if (confirmPasswordField.value === passwordField.value) {
            message = " ";
            errorMsg(message, idElement);
        } else {
            message = "As senhas não coincidem."
            errorMsg(message, idElement);
        }
    })

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
    });

    showConfirmPassword.addEventListener("click", function() {
        if (confirmPasswordField.getAttribute("type") === "password") {
            confirmPasswordField.setAttribute("type", "text");
            confirmPasswordField.focus();
            showConfirmPassword.src = "images/eye.svg";
        } else {
            confirmPasswordField.setAttribute("type", "password");
            confirmPasswordField.focus();
            showConfirmPassword.src = "images/eye-slash.svg";
        }
    });

});

function fillName(nameRef) {
    if (nameRef !== "" && nameRef.length > 3) {
        return true;
    } else {
        console.warn("Preencha o campo nome, por favor. O nome deve ter mais de 4 caracteres.");
        return false;
    }
}

function findEmail(emailRef) {
    if (emailRef !== "") {
        const dbEmail = [];
        for (let index = 0; index < database.length; index++) {
            dbEmail.push(database[index].email);
        }
        if (!dbEmail.includes(emailRef)) {
            console.log("Email válido");
            return true;
        } else {
            console.warn("Email já está cadastrado.");
            return false;
        }
    } else {
        console.warn("Preencha o campo de email, por favor.");
    }
}

function testPassword(passwordRef, confirmPasswordRef) {
    const errorField = document.querySelector("#error-password");
    idElement = errorField.id;
    if (passwordRef !== "" && confirmPasswordRef !=="") {
        if (passwordRef === confirmPasswordRef) {
            return true;
        } else {
            console.warn("As senhas não coincidem");
            return false;
        }
    } else {
        message = "Preencha os campos de senha, por favor."
        errorMsg(message, idElement);
        console.warn(message);
        return false;
    }
}

function errorMsg(messageRef, idRef) {
    const errorText = document.querySelector(`#${idRef}`);
    errorText.innerHTML = messageRef;
}
