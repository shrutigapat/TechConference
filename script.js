// script.js
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        formMessage.classList.remove("hidden");
        contactForm.reset();
        setTimeout(() => {
            formMessage.classList.add("hidden");
        }, 3000);
    });
});
