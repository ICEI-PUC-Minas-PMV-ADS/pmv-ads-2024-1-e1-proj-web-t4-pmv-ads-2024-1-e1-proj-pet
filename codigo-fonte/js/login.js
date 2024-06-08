document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        const cadastroJSON = localStorage.getItem("cadastros");

        if (cadastroJSON) {
            const cadastros = JSON.parse(cadastroJSON);
            const senhaMD5 = md5(senha);

            const usuario = cadastros.find(cadastros => cadastros.email === email && cadastros.senha === senhaMD5);

            if (usuario) {
                alert("Login realizado com sucesso!");
                window.location.href = "index.html";
            } else {
                alert("E-mail ou senha incorretos. Por favor, tente novamente.");
            }

        } else {
            alert("Nenhum cadastro encontrado. Por favor, faça o cadastro primeiro.");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form_recuperar = document.getElementById("form_recuperar");

    form_recuperar.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("Entrar").value;


        const cadastroJSON = localStorage.getItem("cadastros");

        if (cadastroJSON) {
            const cadastros = JSON.parse(cadastroJSON);
            const email = (email);

            const usuario = cadastros.find(cadastros => cadastros.email === email);

            if (usuario) {
                alert("Login realizado com sucesso!");
                window.location.href = "index.html";
            } else {
                alert("E-mail  incorreto, Por favor, tente novamente.");
            }

        } else {
            alert("Nenhum cadastro encontrado. Por favor, faça o cadastro primeiro.");
        }
    });
});
