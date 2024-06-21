const database = JSON.parse(localStorage.getItem("database"));
const authentication = JSON.parse(localStorage.getItem("authentication"));
const authSession = JSON.parse(sessionStorage.getItem("authSession"));

document.addEventListener("DOMContentLoaded", function () {
    const form_recuperar = document.querySelector("#form_recuperar");
    const emailField = document.querySelector("#email");

    form_recuperar.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailField.value;
        let message = "";
        

        if (testLogin(email)) {
            errorMsg("E-mail enviado", true); 
          
        }
    });
});

function testLogin(emailRef) {
    if (emailRef !== "") {
        for (let index = 0; index < database.length; index++) {
            if (emailRef === database[index].email) {
                return true;  
            }            
        }
        message = "E-mail inválido. Por favor, tente novamente."
        errorMsg(message);
        console.error(message);
        return false;
        
    } else {
        message = "Por favor, insira o seu e-mail.";
        errorMsg(message);
        console.error(message);
        return false;
    }
}

function errorMsg(messageRef) {
    const errorText = document.querySelector("#email-error");
    errorText.innerHTML = messageRef;
}
