const database = JSON.parse(localStorage.getItem("database"));
const authentication = JSON.parse(localStorage.getItem("authentication"));
const authSession = JSON.parse(sessionStorage.getItem("authSession"));

document.addEventListener("DOMContentLoaded", function() {
    const logout = document.querySelector("#logout");

    if (getAuthenticationHash(authSession)) {
        console.log("Entrou no IF");
        showProfilePic();
    } else {
        console.log("Entrou no Else");
        hideProfilePic();
    }

    logout.addEventListener("click", function() {
        sessionStorage.clear();
        location.reload();
    });
});

function getAuthenticationHash(authSession) {
    if (authSession !== null) {
        for (let index = 0; index < authSession.length; index++) {
            return authSession[index];
        }
    } else {
        return false;
    }
}

function showProfilePic() {
    const registerContainer = document.querySelector("#register-container");
    const loginContainer = document.querySelector("#login-container");
    const divIconProfile = document.querySelector(".icon-profile");
    registerContainer.setAttribute("style", "display: none");
    loginContainer.setAttribute("style", "display: none");
    divIconProfile.setAttribute("style", "display: block");
}

function hideProfilePic() {
    const divIconProfile = document.querySelector(".icon-profile");
    divIconProfile.setAttribute("style", "display: none")
}