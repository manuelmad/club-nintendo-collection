function searchedMagazines(inventory) {
    // If nothing in search input, clean container, hide section and stop the function
    const section2 = document.querySelector('.section2');
    if(search_input.value == "") {
        section2.style.display = 'none';
        covers_container.innerHTML = '';
        return;
    }
    
    // Show section and clean container
    section2.style.display = 'block';
    covers_container.innerHTML = '';

    // Update h2 with the keyword of the search
    const h2 = document.getElementById('year');
    h2.innerHTML = `SEARCH BY "${(search_input.value).toUpperCase()}"`;

    // Show every magazine wich cover contains the keyword
    inventory.forEach(magazine => {
        // Get all keywords of the magazine cover
        let search_guide = magazine['COVER'];

        // If a keyword is a number, make it a string
        if(typeof search_guide == "number") {
            search_guide = search_guide.toString();
        }

        // Make the searh input uppercase
        const search_word = (search_input.value).toUpperCase();

        // Logic to check if the search input is included in the keywords of the magazine
        const check = search_guide.includes(search_word);

        if(check) {
            const div = document.createElement('div');
            const img = document.createElement('img');
            const p = document.createElement('p');
            if(magazine['YEAR NUMBER'] == 'SPECIAL') {
                img.src= `./imgs/${magazine['YEAR EDIT']}/SPECIAL.png`;
                p.innerHTML = `${magazine.MONTH} - ${magazine['YEAR DATE']}`;
            } else if (magazine['YEAR NUMBER'] == 'SPECIAL2'){
                img.src= `./imgs/${magazine['YEAR EDIT']}/SPECIAL2.png`;
                p.innerHTML = `${magazine.MONTH} - ${magazine['YEAR DATE']}`;
            } else {
                img.src= `./imgs/${magazine['YEAR EDIT']}/${magazine['YEAR NUMBER']}.png`;
                p.innerHTML = `${magazine.MONTH} - ${magazine['YEAR DATE']}`;
            }
            
            const p2 = document.createElement('p');
            if(magazine.OWNED == 'YES') {
                p2.innerHTML = 'Owned';
            } else if(magazine.OWNED == 'YES-POOR') {
                p2.innerHTML = 'Owned (poor)';
            } else if(magazine.OWNED == 'NO') {
                p2.innerHTML = 'Pending';
            }
            
            p2.style.fontWeight = 'bold';

            if(p2.innerText == 'Owned' || p2.innerText == 'Owned (poor)') {
                p2.style.color = '#00913f';
            } else {
                p2.style.color = '#FF0000';
            }

            const p3 = document.createElement('p');
            p3.innerHTML = `# ${magazine['OVERALL NUMBER']}`;
            p3.style.fontWeight = 'bold';

            const p4 = document.createElement('p');
            p4.innerHTML = `Year ${magazine['YEAR EDIT']} No. ${magazine['YEAR NUMBER']}`;
            p4.style.fontWeight = 'bold';
            
            div.appendChild(img);
            div.appendChild(p3);
            div.appendChild(p4);
            div.appendChild(p);
            div.appendChild(p2);
            covers_container.appendChild(div);
        }
    });
}

export default searchedMagazines;