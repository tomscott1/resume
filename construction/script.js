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

// Show the profile section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('profile');
});
