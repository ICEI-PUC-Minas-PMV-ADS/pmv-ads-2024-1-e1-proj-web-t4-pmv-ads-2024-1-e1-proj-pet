const database = JSON.parse(localStorage.getItem("database"));

document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastroForm");
    const nameField = document.querySelector("#nome");
    const emailField = document.querySelector("#email");
    const passwordField = document.querySelector("#senha");
    const confirmPasswordField = document.querySelector("#confirmarSenha");

    cadastroForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = nameField.value;
        const email = emailField.value;
        const senha = passwordField.value;
        const confirmarSenha = confirmPasswordField.value;

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
            cadastroForm.submit();
            console.log("Usuário cadastrado com Sucesso!");
        } else {
            console.error("Cadastro do usuário não foi realizado.");
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
    if (passwordRef !== "" && confirmPasswordRef !=="") {
        if (passwordRef === confirmPasswordRef) {
            return true;
        } else {
            console.warn("As senhas não coincidem");
            return false;
        }
    } else {
        console.warn("Preencha os campos de senha, por favor.");
        return false;
    }
}