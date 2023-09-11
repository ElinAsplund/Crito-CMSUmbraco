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