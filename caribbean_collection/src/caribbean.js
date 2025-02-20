import inventory_caribbean from "./database_caribbean.js";
import missingMagazines from "../../functions/missingMagazines.js";
import searchedMagazines from "../../functions/searchedMagazines.js";
import createEditionsList from "../../functions/createEditionsList.js";
import poorConditionMagazines from "../../functions/poorConditionMagazines.js";
import posterNeededMagazines from "../../functions/posterNeededMagazines.js";

import inventory_chilean from "../../chilean_collection/src/database_chilean.js";

// Accesing years container and adding first year
// const years_container = document.getElementById('years_container');
// const covers_container = document.getElementById('covers_container');

createEditionsList(inventory_caribbean, inventory_chilean);

// Accessing search input
const search_input = document.getElementById("search_input");

// Make a search everytime something is written in the search input
search_input.addEventListener('input', (e)=> {
    e.preventDefault; // I had to add this line because the fucntion was called by default as soon as the page is loadad
    let ext = 'png';
    searchedMagazines(inventory_caribbean, ext);
});

// Function to show only missing magazines
const missing_magazines_btn = document.getElementById('missing_magazines_btn');
missing_magazines_btn.addEventListener('click', (e) => {
    e.preventDefault; // I had to add this line because the fucntion was called by default as soon as the page is loadad
    let ext = 'png';
    missingMagazines(inventory_caribbean, ext, inventory_chilean);
});

// Function to show only poor condition magazines
const poor_magazines_btn = document.getElementById('poor_magazines_btn');
poor_magazines_btn.addEventListener('click', (e) => {
    e.preventDefault; // I had to add this line because the fucntion was called by default as soon as the page is loadad
    let ext = 'png';
    poorConditionMagazines(inventory_caribbean, ext);
});

// Function to show only poster needed magazines
const poster_magazines_btn = document.getElementById('poster_magazines_btn');
poster_magazines_btn.addEventListener('click', (e) => {
    e.preventDefault; // I had to add this line because the fucntion was called by default as soon as the page is loadad
    let ext = 'png';
    posterNeededMagazines(inventory_caribbean, ext);
});