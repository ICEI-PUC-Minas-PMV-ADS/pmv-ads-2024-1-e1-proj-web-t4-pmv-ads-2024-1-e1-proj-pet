document.addEventListener("DOMContentLoaded", function() {
    const logout = document.querySelector("#logout");
    const btnProfilePic = document.querySelector("#btn-dropdown");
    const dropdownContent = document.querySelector("#dropdown");

    btnProfilePic.addEventListener("click", function() {
        dropdownContent.classList.toggle("show-content");
    });

    dropdownContent.addEventListener("mouseleave", function() {
        dropdownContent.classList.remove("show-content");
    });

    if (getAuthenticationHash(authSession)) {
        showProfilePic();
    } else {
        hideProfilePic();
    }

    logout.addEventListener("click", function() {
        sessionStorage.clear();
        window.location.href = "index.html";
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
