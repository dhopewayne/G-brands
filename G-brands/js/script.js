// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // Scroll smoothly to the target section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // Scroll smoothly to the target section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter form handling
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    showThankYouModal('Thank you for subscribing!', 'You have been successfully subscribed to my newsletter. Stay tuned for updates!');
    this.reset();
});

// Modal functionality
function showThankYouModal(title, message) {
    const modal = document.getElementById('thankYouModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');

    modalTitle.textContent = title;
    modalMessage.textContent = message;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    // Focus management for accessibility
    modal.setAttribute('aria-hidden', 'false');
    modal.focus();
}

function closeThankYouModal() {
    const modal = document.getElementById('thankYouModal');
    const modalBody = modal.querySelector('.modal-body');

    // Reset modal content to original thank you structure
    modalBody.innerHTML = `
        <h3 id="modalTitle">Thank You!</h3>
        <p id="modalMessage">Your message has been sent successfully. I'll get back to you soon!</p>
    `;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling

    // Focus management for accessibility
    modal.setAttribute('aria-hidden', 'true');
}

// Modal event listeners
document.getElementById('modalClose').addEventListener('click', closeThankYouModal);
document.getElementById('modalOkBtn').addEventListener('click', closeThankYouModal);

// Close modal when clicking outside
document.getElementById('thankYouModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeThankYouModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('thankYouModal').style.display === 'block') {
        closeThankYouModal();
    }
});

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add fade-in-up class when element comes into view
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all section containers for scroll animations
document.querySelectorAll('section > .container').forEach(section => {
    // Set initial styles for animation
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Back to Top Button functionality
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 





