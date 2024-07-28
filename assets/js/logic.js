// Light/Dark Mode Toggle Functionality
function toggleLightDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Attach event listener to the toggle button if it exists
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleMode');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleLightDarkMode);
    }
});