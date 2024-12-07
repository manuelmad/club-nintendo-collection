import inventory_caribbean from "./database_caribbean.js";
import missingMagazines from "../../functions/missingMagazines.js";
import searchedMagazines from "../../functions/searchedMagazines.js";
import createEditionsList from "../../functions/createEditionsList.js";

// Accesing years container and adding first year
// const years_container = document.getElementById('years_container');
// const covers_container = document.getElementById('covers_container');

createEditionsList(inventory_caribbean);

// Accessing search input
const search_input = document.getElementById("search_input");

// Make a search everytime something is written in the search input
search_input.addEventListener('input', (e)=> {
    e.preventDefault; // I had to add this line because the fucntion was called by default as soon as the page is loadad
    searchedMagazines(inventory_caribbean);
});

// Function to show only missing magazines
const missing_magazines_btn = document.getElementById('missing_magazines_btn');
missing_magazines_btn.addEventListener('click', (e) => {
    e.preventDefault; // I had to add this line because the fucntion was called by default as soon as the page is loadad
    missingMagazines(inventory_caribbean);
});