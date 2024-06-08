
document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastroForm");

    cadastroForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem. Por favor, tente novamente.");
        } else {
            const senhaMD5 = md5(senha);
            const cadastro = {
                email: email,
                senha: senhaMD5,
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
            let cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];
            cadastros.push(cadastro);
            localStorage.setItem("cadastros", JSON.stringify(cadastros));

            alert("Cadastro realizado com sucesso!");
            cadastroForm.reset();
            window.location.href = "login.html";
        }
        
        /*
        *    Rever trecho do código
        *    if (cadastros.some(c => c.email === email)) {
        *    alert("E-mail já cadastrado. Por favor, utilize outro e-mail.");
        *    return;
        }*/

    });
});
