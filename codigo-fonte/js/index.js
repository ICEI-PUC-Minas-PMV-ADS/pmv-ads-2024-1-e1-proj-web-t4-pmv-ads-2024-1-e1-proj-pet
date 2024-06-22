document.addEventListener("DOMContentLoaded", function() {
    const registerContainer = document.querySelector(".users");
    const searchContainer = document.querySelector(".sitters");

    const numRegister = document.querySelector("#num-register");
    numRegister.innerHTML = numbersPetSitters();

    if (authenticatedSession !== null && authenticatedSession.length > 0) {
        registerContainer.setAttribute("style", "display: none");
        searchContainer.setAttribute("style", "margin: auto");
    } else {
        registerContainer.setAttribute("style", "display: block");
    }
});

function numbersPetSitters() {
    let quantity = 0;
    for (let index = 0; index < database.length; index++) {
        if (database[index].serPetSitter) {
            quantity++;
        }
    }
    return quantity;
}