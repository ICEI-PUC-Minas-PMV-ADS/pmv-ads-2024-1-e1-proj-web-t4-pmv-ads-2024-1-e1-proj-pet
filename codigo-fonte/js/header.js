document.addEventListener("DOMContentLoaded", function() {
    const btnProfilePic = document.querySelector("#btn-dropdown");
    const dropdownContent = document.querySelector("#dropdown");

    btnProfilePic.addEventListener("click", function() {
        dropdownContent.classList.toggle("show-content");
    });

    dropdownContent.addEventListener("mouseleave", function() {
        dropdownContent.classList.remove("show-content");
    });
})