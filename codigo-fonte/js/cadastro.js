document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastroForm");

    cadastroForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;
        const bairro = document.getElementById("bairro").value;
        const administraMedicamentos = document.getElementById("administraMedicamentos").value;
        const teveExperiencia = document.getElementById("teveExperiencia").value;
        const aplicaInjecao = document.getElementById("aplicaInjecao").value;
        const descricao = document.getElementById("descricao").value;

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem. Por favor, tente novamente.");
            return;
        }

        const senhaMD5 = md5(senha);

        const cadastro = {
            nome: nome,
            email: email,
            senha: senhaMD5,
            bairro: bairro,
            administraMedicamentos: administraMedicamentos === "sim",
            teveExperiencia: teveExperiencia === "sim",
            aplicaInjecao: aplicaInjecao === "sim",
            descricao: descricao,
            foto: "" // Este campo será preenchido após o upload da foto
        };

        let cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];

        if (cadastros.some(c => c.email === email)) {
            alert("E-mail já cadastrado. Por favor, utilize outro e-mail.");
            return;
        }

        cadastros.push(cadastro);
        localStorage.setItem("cadastros", JSON.stringify(cadastros));

        alert("Cadastro realizado com sucesso!");
        cadastroForm.reset();
        window.location.href = "login.html";
    });
});
