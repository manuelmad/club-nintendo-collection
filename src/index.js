import inventory from './database.js';

// Defining quantity of active years
let year_editions = [];

for(let i = 1; i<=24; i++) {
    year_editions.push(i);
}

console.log(year_editions);

// Defining years active
let year_dates = [];

for(let i = 1991; i<=2015; i++) {
    year_dates.push(i);
}

console.log(year_dates);

// Accseing years container and adding first year
const years_container = document.getElementById('years_container');
const covers_container = document.getElementById('covers_container');

const ul = document.createElement('ul');
const first_li = document.createElement('li');
first_li.innerHTML = `Año ${year_editions[0]} : ${year_dates[0]} - ${year_dates[1]}`;
first_li.addEventListener('click', ()=> {
    covers_container.innerHTML = '';

    const h2 = document.getElementById('year');
    h2.innerHTML = 'YEAR 1';

    inventory.forEach(magazine => {
        if(magazine['YEAR EDIT']==1) {
            const div = document.createElement('div');
            const img = document.createElement('img');
            const p = document.createElement('p');
            if(magazine['YEAR NUMBER'] == 'SPECIAL') {
                img.src= `../imgs/1/SPECIAL.jpg` || `../imgs/1/SPECIAL.webp`;
                p.innerHTML = `${magazine.MONTH} - ${magazine['YEAR DATE']} (SPECIAL EDITION)`;
            } else {
                img.src= `../imgs/1/${magazine['YEAR NUMBER']}.webp` || `../imgs/1/${magazine['YEAR NUMBER']}.jpg`;
                p.innerHTML = `${magazine.MONTH} - ${magazine['YEAR DATE']}`;
            }
            const p2 = document.createElement('p');
            p2.innerHTML = `${magazine.OWNED == 'YES' ? 'Adquirida' : 'Pendiente'}`;

            if(p2.innerText == 'Adquirida') {
                p2.style.color = '#00913f';
            } else {
                p2.style.color = '#FF0000';
            }

            div.appendChild(img);
            div.appendChild(p);
            div.appendChild(p2);
            covers_container.appendChild(div);
        }
    });

});
ul.appendChild(first_li);


let year_dates_control = 2;
// Adding rest of years
for(let i=1; i<=year_editions.length - 1; i++) {
    const li = document.createElement('li');
    li.innerHTML = `Año ${year_editions[i]} : ${year_dates[year_dates_control]}`;
    year_dates_control++;
    li.addEventListener('click', () => {
        covers_container.innerHTML = '';

        const h2 = document.getElementById('year');
        h2.innerHTML = `YEAR ${year_editions[i]}`;

        inventory.forEach(magazine => {
            if(magazine['YEAR EDIT']==year_editions[i]) {
                const div = document.createElement('div');
                const img = document.createElement('img');
                const p = document.createElement('p');
                if(magazine['YEAR NUMBER'] == 'SPECIAL') {
                    img.src= `../imgs/${year_editions[i]}/SPECIAL.jpg` || `../imgs/${year_editions[i]}/SPECIAL.webp`;
                    p.innerHTML = `${magazine.MONTH} - ${magazine['YEAR DATE']} (SPECIAL EDITION)`;
                } else {
                    img.src= `../imgs/${year_editions[i]}/${magazine['YEAR NUMBER']}.webp` || `../imgs/${year_editions[i]}/${magazine['YEAR NUMBER']}.jpg`;
                    p.innerHTML = `${magazine.MONTH} - ${magazine['YEAR DATE']}`;
                }
                const p2 = document.createElement('p');
                p2.innerHTML = `${magazine.OWNED == 'YES' ? 'Adquirida' : 'Pendiente'}`;

                if(p2.innerText == 'Adquirida') {
                    p2.style.color = '#00913f';
                } else {
                    p2.style.color = '#FF0000';
                }
    
                div.appendChild(img);
                div.appendChild(p);
                div.appendChild(p2);
                covers_container.appendChild(div);
            }
        });
    });
    ul.appendChild(li);
}

years_container.appendChild(ul);

