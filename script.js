const allItems = Array.from(document.querySelectorAll('.result-item'));
const searchBox = document.getElementById('search-box');
const resultsPopup = document.getElementById('results-popup');
const overlay = document.getElementById('overlay');
const searchResultsContainer = document.getElementById('search-results');

// Function to filter items based on search input
function filterItems() {
    const query = searchBox.value.toLowerCase();
    const filteredItems = allItems.filter(item => item.textContent.toLowerCase().includes(query));
    
    if (query === "") {
        resultsPopup.style.display = "none";
        overlay.style.display = "none";
    } else {
        displayResults(filteredItems);
    }
}

// Function to display filtered results in the pop-up
function displayResults(filteredItems) {
    searchResultsContainer.innerHTML = "";  // Clear previous results

    if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('result-item');
            resultDiv.textContent = item.textContent;
            resultDiv.onclick = function() {
                alert("You selected: " + item.textContent);
                clearSearch();  // Clear the search box after selection
            };
            searchResultsContainer.appendChild(resultDiv);
        });

        resultsPopup.style.display = "block";
        overlay.style.display = "block";
    } else {
        searchResultsContainer.innerHTML = "<p>No results found.</p>";
        resultsPopup.style.display = "block";
        overlay.style.display = "block";
    }
}

// Function to clear the search box and hide the results
function clearSearch() {
    searchBox.value = "";
    resultsPopup.style.display = "none";
    overlay.style.display = "none";
}