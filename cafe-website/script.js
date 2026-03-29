const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const revealElements = document.querySelectorAll('.reveal');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

window.addEventListener('click', (event) => {
    if (!event.target.closest('.header-inner') && navLinks?.classList.contains('open')) {
        navLinks.classList.remove('open');
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

revealElements.forEach((element) => observer.observe(element));

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = contactForm.querySelector('#name')?.value.trim();
        const email = contactForm.querySelector('#email')?.value.trim();
        const message = contactForm.querySelector('#message')?.value.trim();

        if (!name || !email || !message) {
            alert('Please complete all fields before sending your message.');
            return;
        }

        alert(`Thanks, ${name}! Your message has been received. We will reply to ${email} soon.`);
        contactForm.reset();
    });
}
