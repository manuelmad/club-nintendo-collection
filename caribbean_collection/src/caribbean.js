import inventory_caribbean from "./database_caribbean.js";

// Defining quantity of active years
let year_editions = [];

for(let i = 1; i<=8; i++) {
    year_editions.push(i);
}

// Defining years active
let year_dates = [];

for(let i = 1992; i<=1999; i++) {
    year_dates.push(i);
}

const  total_magazines = inventory_caribbean.length;
//console.log(total_magazines);

let total_owned_magazines = 0;

// Accesing years container and adding first year
const years_container = document.getElementById('years_container');
const covers_container = document.getElementById('covers_container');
const section2 = document.querySelector('.section2');
const ul = document.createElement('ul');

let year_dates_control = 0;
// Adding rest of years as li
for(let i=0; i<=year_editions.length - 1; i++) {
    const li = document.createElement('li');

    // Counting the total and owned magazines in current year
    let magazines_number = 0;
    let owned_magazines_number = 0;

    inventory_caribbean.forEach(magazine => {
        if(magazine['YEAR EDIT'] == year_editions[i]) {
            magazines_number++;
            if(magazine.OWNED == 'YES' || magazine.OWNED == 'YES-POOR') {
                owned_magazines_number++;
                total_owned_magazines++;
            }
        }
    });

    li.innerHTML = `Year ${year_editions[i]} : ${year_dates[year_dates_control]} (${owned_magazines_number}/${magazines_number})`;

    year_dates_control++;
    li.addEventListener('click', () => {
        covers_container.innerHTML = '';

        const h2 = document.getElementById('year');
        h2.innerHTML = `YEAR ${year_editions[i]}`;

        inventory_caribbean.forEach(magazine => {
            if(magazine['YEAR EDIT']==year_editions[i]) {
                const div = document.createElement('div');
                const img = document.createElement('img');
                const p = document.createElement('p');
                if(magazine['YEAR NUMBER'] == 'SPECIAL') {
                    img.src= `./imgs/${year_editions[i]}/SPECIAL.png`;
                    p.innerHTML = `${magazine.MONTH} - ${magazine['YEAR DATE']}`;
                } else if (magazine['YEAR NUMBER'] == 'SPECIAL2'){
                    img.src= `./imgs/${year_editions[i]}/SPECIAL2.png`;
                    p.innerHTML = `${magazine.MONTH} - ${magazine['YEAR DATE']}`;
                } else {
                    img.src= `./imgs/${year_editions[i]}/${magazine['YEAR NUMBER']}.png`;
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
                //p2.innerHTML = `${magazine.OWNED == 'YES' ? 'Owned' : 'Pending'}`;
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
        section2.style.display = 'block';
    });
    ul.appendChild(li);
}

years_container.appendChild(ul);


// Accessing search input
const search_input = document.getElementById("search_input");

// Make a search everytime something is written in the search input
search_input.addEventListener('input', ()=> {
    // If nothing in search input, clean container, hide section and stop the function
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
	inventory_caribbean.forEach(magazine => {
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
});

// show the total count
const total_count = document.getElementById('total_count');
total_count.innerHTML =  `Total count: ${total_owned_magazines}/ ${total_magazines} magazines.`;


// Function to show only missing magazines
const missing_magazines_btn = document.getElementById('missing_magazines_btn');
missing_magazines_btn.addEventListener('click', () => {
    covers_container.innerHTML = '';

    const h2 = document.getElementById('year');
    h2.innerHTML = "Missing Magazines";

    inventory_caribbean.forEach(magazine => {
        if(magazine.OWNED == "NO") {
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
            

            // Not necessary
            const p2 = document.createElement('p');
            if(magazine.OWNED == 'YES') {
                p2.innerHTML = 'Owned';
            } else if(magazine.OWNED == 'YES-POOR') {
                p2.innerHTML = 'Owned (poor)';
            } else if(magazine.OWNED == 'NO') {
                p2.innerHTML = 'Pending';
            }
            
            p2.style.fontWeight = 'bold';

            // Not necessary
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
    section2.style.display = 'block';
});