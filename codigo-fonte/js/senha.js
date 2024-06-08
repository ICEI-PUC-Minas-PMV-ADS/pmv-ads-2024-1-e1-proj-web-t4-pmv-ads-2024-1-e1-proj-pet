document.addEventListener("DOMContentLoaded", function () {
    const form_recuperar  = document.getElementById("form_recuperar");

    form_recuperar.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;

        const cadastroJSON = localStorage.getItem("cadastros");

        if (cadastroJSON) {
            const cadastros = JSON.parse(cadastroJSON);

            const usuario = cadastros.find(cadastros => cadastros.email === email);

            if (usuario) {
                alert("E-mail enviado");
                window.location.href = "index.html";
            } else {
                alert("E-mail incorreto. Por favor, tente novamente.");
              }
        }
    });
});


