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

//document.getElementById('test-btn').addEventListener('click', function () {
//    console.log("click!");
//});

//Validation ContactForm


//Validation EmailSignupForm
function validateTest(e) {
    e.preventDefault();
    console.log("TEST");
}