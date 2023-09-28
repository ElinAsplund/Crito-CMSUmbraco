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

//Validate news-update-signup section:
function validateSignupForm(e) {
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

//Adds error message to email-input:
//Signup email 
function errorMessageSignupEmail(e) {
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

//Validate contact-form section:
//Validates all inputs
function validateContactForm(e) {
    e.preventDefault();
    const errorName = document.querySelector(`#contact-name-error`);
    const errorEmail = document.querySelector(`#contact-email-error`);
    const errorMessage = document.querySelector(`#contact-message-error`);

    if (checkIfAllInputsAreEntered() && errorName.innerText === `` && errorEmail.innerText === `` && errorMessage.innerText === ``) {
        console.log(`CAN SEND`)
        e.target.submit()
    }
    else
        console.log(`CAN NOT SEND`)
}

function checkIfAllInputsAreEntered() {
    const inputName = document.querySelector(`#contact-name-input`);
    const inputEmail = document.querySelector(`#contact-email-input`);
    const inputMessage = document.querySelector(`#contact-message-input`);

    if (inputName.value != `` && inputEmail.value != `` && inputMessage.value != ``)
        return true;
    else
        return false;
}

function clearSuccessMessage() {
    const successMsg = document.querySelector(`#contact-form-success`);

    if (successMsg)
        successMsg.innerText = ``;
}

//Adds error messages to name, email and message-inputs:

//Contact name
function errorMessageContactName(e) {
    const nameInput = e.target;
    const errorMsg = document.querySelector(`#contact-name-error`);
    const regExName = /^[a-öA-Ö]+(?:[ é'-][a-öA-Ö]+)*$/;

    clearSuccessMessage()

    errorMsg.innerText = ``;

    if (!regExName.test(nameInput.value))
        errorMsg.innerText = `Please enter a valid name.`;

    if (nameInput.value === ``)
        errorMsg.innerText = `Please enter an name.`;
}

//Contact email
function errorMessageContactEmail(e) {
    const emailInput = e.target;
    const errorMsg = document.querySelector(`#contact-email-error`);
    const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    clearSuccessMessage()

    errorMsg.innerText = ``;

    if (!regExEmail.test(emailInput.value))
        errorMsg.innerText = `Please enter a valid email.`;

    if (emailInput.value === ``)
        errorMsg.innerText = `Please enter an email.`;
}

//Contact message
function errorMessageContactMessage(e) {
    const messageInput = e.target;
    const errorMsg = document.querySelector(`#contact-message-error`);

    clearSuccessMessage()

    errorMsg.innerText = ``;

    if (messageInput.value.length < 15)
        errorMsg.innerText = `Your message needs to be at least 15 characters long.`;

    if (messageInput.value === ``)
        errorMsg.innerText = `Please enter a message.`;
}

//Scrolling to current section on page when rerendering, after submitting a form
document.addEventListener('DOMContentLoaded', function () {
    const successMsg = document.querySelector(`#signup-email-success`);

    if (successMsg)
        window.location.hash = "signup-email-form";
});

document.addEventListener('DOMContentLoaded', function () {
    const successMsg = document.querySelector(`#contact-form-success`);

    if (successMsg)
        window.location.hash = "contact-form-section";
});