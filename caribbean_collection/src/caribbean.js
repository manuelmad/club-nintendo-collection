import inventory_caribbean from "./database_caribbean.js";
import missingMagazines from "../../functions/missingMagazines.js";
import searchedMagazines from "../../functions/searchedMagazines.js";
import createEditionsList from "../../functions/createEditionsList.js";
import poorConditionMagazines from "../../functions/poorConditionMagazines.js";
import posterNeededMagazines from "../../functions/posterNeededMagazines.js";
import searchByPoster from "../../functions/searchByPoster.js";

import inventory_chilean from "../../chilean_collection/src/database_chilean.js";

// Accesing years container and adding first year
// const years_container = document.getElementById('years_container');
// const covers_container = document.getElementById('covers_container');

createEditionsList(inventory_caribbean, inventory_chilean);

// Accessing select value and adding event
const filter_select = document.getElementById('filter_select');
filter_select.addEventListener('change', ()=> {
    if(filter_select.value === 'Portada') {
        document.querySelector('.cover').style.display = 'block';
        document.querySelector('.poster').style.display = 'none';
    } else if(filter_select.value === 'Faltantes') {
        document.querySelector('.cover').style.display = 'none';
        document.querySelector('.poster').style.display = 'none';
        let ext = 'png';
        missingMagazines(inventory_caribbean, ext, inventory_chilean);
    } else if(filter_select.value === 'Malas condiciones') {
        document.querySelector('.cover').style.display = 'none';
        document.querySelector('.poster').style.display = 'none';
        let ext = 'png';
        poorConditionMagazines(inventory_caribbean, ext);
    } else if(filter_select.value === 'Posters faltantes') {
        document.querySelector('.cover').style.display = 'none';
        document.querySelector('.poster').style.display = 'none';
        let ext = 'png';
        posterNeededMagazines(inventory_caribbean, ext);
    } else if(filter_select.value === 'Poster') {
        document.querySelector('.cover').style.display = 'none';
        document.querySelector('.poster').style.display = 'block';
    }
});

// Accessing search input
const search_input = document.getElementById("search_input");

// Make a search everytime something is written in the search input
search_input.addEventListener('input', (e)=> {
    e.preventDefault; // I had to add this line because the fucntion was called by default as soon as the page is loadad
    let ext = 'png';
    searchedMagazines(inventory_caribbean, ext);
});

// Accessing search by poster input
const search_poster_input = document.getElementById("search_poster_input");

// Make a search everytime something is written in the search input
search_poster_input.addEventListener('input', (e)=> {
    e.preventDefault; // I had to add this line because the fucntion was called by default as soon as the page is loadad
    let ext = 'png';
    searchByPoster(inventory_caribbean, ext);
});