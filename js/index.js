// this is js code for dynamic text only


    const texts = ["I am Web developer.", "I am your all-in-one solution."];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.getElementById('dynamic-text').textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Pause before start typing next text
        } else {
            setTimeout(type, 120); // Speed of typing
        }
    }());

// Dynamic text is js is ending here 


// this js code is for dark and light theme btn


document.getElementById('theme-toggle').addEventListener('click', function() {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        this.textContent = 'Light Mode';
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        this.textContent = 'Dark Mode';
    }
});


// this js code is for dark and light theme btn ending here


document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - document.querySelector('#navbar').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active link in navbar
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});
