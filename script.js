// Selecting the search form and search button elements
let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');

// Adding a click event listener to the search button
searchBtn.addEventListener('click', function() {
    searchForm.classList.toggle('active');
});