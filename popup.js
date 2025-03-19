const menuIcon = document.getElementById('menu-icon');
const menuSection = document.getElementById('menu-section');
const content = document.getElementById('content');
const searchBox = document.getElementById('search-box');

// Function to toggle menu
function toggleMenu() {
    menuSection.classList.toggle('open-menu');
    content.classList.toggle('content-shift');
    menuIcon.classList.toggle('hidden');
}

// Open menu when menu icon is clicked
menuIcon.addEventListener('click', function(event) {
    toggleMenu();
    event.stopPropagation(); // Prevent the event from propagating
});

// Handle the search input and redirect to the search-results page
searchBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && searchBox.value.trim() !== '') {
        // Redirect to search-results.html with the search query as a URL parameter
        window.location.href = `search-results.html?search=${encodeURIComponent(searchBox.value)}`;
    }
});

// Close menu when clicked outside
document.addEventListener('click', function(event) {
    if (!menuSection.contains(event.target) && !menuIcon.contains(event.target)) {
        if (menuSection.classList.contains('open-menu')) {
            toggleMenu();
        }
    }
});