document.addEventListener("DOMContentLoaded", function() {
    const logout = document.querySelector("#logout");
    const btnProfilePic = document.querySelector("#btn-dropdown");
    const dropdownContent = document.querySelector("#dropdown");

    
    if (getAuthenticationHash(authenticatedSession)) {
        const user = getUser(database, authentication, authenticatedSession);
        showProfilePic(user);
    } else {
        hideProfilePic();
    }

    btnProfilePic.addEventListener("click", function() {
        dropdownContent.classList.toggle("show-content");
    });

    dropdownContent.addEventListener("mouseleave", function() {
        dropdownContent.classList.remove("show-content");
    });


    logout.addEventListener("click", function() {
        sessionStorage.clear();
        window.location.href = "index.html";
    });
});

function getAuthenticationHash(authenticatedSession) {
    if (authenticatedSession !== null) {
        for (let index = 0; index < authenticatedSession.length; index++) {
            return authenticatedSession[index];
        }
    } else {
        return false;
    }
}

function getUser(database, authentication, authenticatedSession) {
    const authenticationHash = getAuthenticationHash(authenticatedSession);
    let idUser, user;
    for (let index = 0; index < authentication.length; index++) {
        if (authenticationHash === authentication[index].hash) {
            idUser = authentication[index].id;
            break;
        }
    }

    for (let index = 0; index < database.length; index++) {
        if (idUser === database[index].id) {
            user = database[index];
            break;
        }
    }
    return user;
}

function showProfilePic(user) {
    const registerContainer = document.querySelector("#register-container");
    const loginContainer = document.querySelector("#login-container");
    const divIconProfile = document.querySelector(".icon-profile");
    const headerProfilePic = document.querySelector("#header-profile-pic");
    registerContainer.setAttribute("style", "display: none");
    loginContainer.setAttribute("style", "display: none");
    divIconProfile.setAttribute("style", "display: block");
    if(user.foto === "") {
        headerProfilePic.setAttribute("src", "images/user-circle.png");
    } else {
        headerProfilePic.setAttribute("src", user.foto);
    }
}

function hideProfilePic() {
    const divIconProfile = document.querySelector(".icon-profile");
    divIconProfile.setAttribute("style", "display: none")
}
