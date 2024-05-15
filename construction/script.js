function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    // Update button states
    const buttons = document.querySelectorAll('.button-container button');
    buttons.forEach(button => {
        button.classList.remove('selected');
    });

    // Add 'selected' class to the clicked button
    document.querySelector(`.button-container button[onclick="showSection('${sectionId}')"]`).classList.add('selected');
}

function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.hamburger-icon') && !event.target.matches('.hamburger-icon div')) {
        const menu = document.getElementById('dropdownMenu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        }
    }
}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.job-entry');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

// Carousel navigation
document.getElementById('prevBtn').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

document.addEventListener('DOMContentLoaded', () => {
    // Show the profile section by default
    showSection('profile');
    // handle carousel button visibility
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.job-entry');
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        const offset = -currentSlide * 100;
        slides.forEach(slide => {
            slide.style.transform = `translateX(${offset}%)`;
        });

        updateButtons(slides.length);
    }

    function updateButtons(totalSlides) {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (currentSlide === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }

        if (currentSlide === totalSlides - 1) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'block';
        }
    }

    document.getElementById('prevBtn').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // Initialize the first slide and buttons
    showSlide(currentSlide);
});
