const searchContainer = document.getElementById('search-container');
const resultsDiv = document.getElementById('results');
const newSearchBox = document.getElementById('new-search-box');
const noResultsMessage = document.getElementById('no-results-message');

// Create an array to simulate a large number of items (some hidden initially)
const allItems = [
    { id: 1, title: 'Apple', description: 'A delicious fruit', hidden: false },
    { id: 2, title: 'Banana', description: 'Rich in potassium', hidden: false },
    { id: 3, title: 'Carrot', description: 'Good for eyesight', hidden: true },
    { id: 4, title: 'Dragon Fruit', description: 'Tropical and vibrant', hidden: true },
    { id: 5, title: 'Grapes', description: 'Great for snacking', hidden: false },
    { id: 6, title: 'Watermelon', description: 'Refreshing in summer', hidden: false },
    { id: 7, title: 'Lemon', description: 'Sour but tasty', hidden: true },
    { id: 8, title: 'Pineapple', description: 'A tropical delight', hidden: true },
    { id: 9, title: 'Orange', description: 'Sweet and juicy', hidden: false },
    { id: 10, title: 'Kiwi', description: 'Small but flavorful', hidden: true }
];

// Function to display search results
function displaySearchResults(query) {
    const filteredResults = allItems.filter(item => {
        return item.title.toLowerCase().includes(query.toLowerCase()) || 
               item.description.toLowerCase().includes(query.toLowerCase());
    });

    // Clear previous results
    resultsDiv.innerHTML = '';

    if (filteredResults.length === 0) {
        resultsDiv.style.display = 'none';
        noResultsMessage.style.display = 'block';
    } else {
        resultsDiv.style.display = 'grid';
        noResultsMessage.style.display = 'none';

        // Show the filtered results
        filteredResults.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            
            resultItem.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <a href="#">View More</a>
            `;
            
            resultsDiv.appendChild(resultItem);
        });
    }
}

// Handle the new search input
newSearchBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && newSearchBox.value.trim() !== '') {
        displaySearchResults(newSearchBox.value);
    }
});

// Show initial results when the page loads (for demonstration, we'll use "Apple")
displaySearchResults('Apple');