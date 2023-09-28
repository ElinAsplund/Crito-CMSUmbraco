// Active navLink.
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('a.page-route');

if (activePage === "/") {
    navLinks[0].classList.add('active')
} else {
    navLinks.forEach(link => {
        if (link.href.includes(`${activePage}`)) {
            link.classList.add('active');
        }
    });
}

//Validate news-update-signup section
function validateSignup(e) {
    e.preventDefault();
    const errorMsg = document.querySelector(`#signup-email-error`);
    const emailInput = document.querySelector(`#signup-email-input`);
    let allOK = false;

    if (errorMsg.innerText === `` && emailInput.value != ``)
        allOK = true;

    if (allOK)
        e.target.submit();

    console.log(`allOK: ` + allOK)
}

function errorMessageEmail(e) {
    const emailInput = e.target;
    const errorMsg = document.querySelector(`#signup-email-error`);
    const successMsg = document.querySelector(`#signup-email-success`);
    const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    errorMsg.innerText = ``;

    if (successMsg)
        successMsg.innerText = ``;

    if (!regExEmail.test(emailInput.value))
        errorMsg.innerText = `Please enter a valid email.`;

    if (emailInput.value === ``)
        errorMsg.innerText = `Please enter an email.`;
}

document.addEventListener('DOMContentLoaded', function () {
    const successMsg = document.querySelector(`#signup-email-success`);

    if (successMsg)
        window.location.hash = "signup-email-form";
});


//Validate contact-form section