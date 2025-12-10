// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Skip if it's just "#" (empty anchor)
            if(this.getAttribute('href') === '#') return;

            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Split hero section expansion with centered divider
    const leftSection = document.querySelector('.left-section');
    const rightSection = document.querySelector('.right-section');
    const splitContainer = document.querySelector('.split-container');
    const divider = document.querySelector('.split-divider');

    if (leftSection && rightSection && splitContainer && divider) {
        leftSection.addEventListener('mouseenter', function() {
            leftSection.style.flex = '1.1';
            rightSection.style.flex = '0.9';
            // 1.1 / (1.1 + 0.9) = 0.55 = 55%
            divider.style.left = '55%';
        });

        rightSection.addEventListener('mouseenter', function() {
            rightSection.style.flex = '1.1';
            leftSection.style.flex = '0.9';
            // 0.9 / (1.1 + 0.9) = 0.45 = 45%
            divider.style.left = '45%';
        });

        leftSection.addEventListener('mouseleave', function() {
            leftSection.style.flex = '1';
            rightSection.style.flex = '1';
            divider.style.left = '50%';
        });

        rightSection.addEventListener('mouseleave', function() {
            leftSection.style.flex = '1';
            rightSection.style.flex = '1';
            divider.style.left = '50%';
        });
    }
});