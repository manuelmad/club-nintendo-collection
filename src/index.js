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

// Accesing years container and adding first year
const years_container = document.getElementById('years_container');
const covers_container = document.getElementById('covers_container');
const section2 = document.querySelector('.section2');

const ul = document.createElement('ul');
const first_li = document.createElement('li');
first_li.innerHTML = `Year ${year_editions[0]} : ${year_dates[0]} - ${year_dates[1]}`;
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
                img.src= `../imgs/1/SPECIAL.jpg`;
                p.innerHTML = `${magazine.MONTH} - ${magazine['YEAR DATE']}`;
            } else {
                img.src= `../imgs/1/${magazine['YEAR NUMBER']}.webp`;
                p.innerHTML = `${magazine.MONTH} - ${magazine['YEAR DATE']}`;
            }
            const p2 = document.createElement('p');
            p2.innerHTML = `${magazine.OWNED == 'YES' ? 'Owned' : 'Pending'}`;
            p2.style.fontWeight = 'bold';

            if(p2.innerText == 'Owned') {
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
ul.appendChild(first_li);


let year_dates_control = 2;
// Adding rest of years
for(let i=1; i<=year_editions.length - 1; i++) {
    const li = document.createElement('li');
    li.innerHTML = `Year ${year_editions[i]} : ${year_dates[year_dates_control]}`;
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
                    img.src= `../imgs/${year_editions[i]}/SPECIAL.jpg`;
                    p.innerHTML = `${magazine.MONTH} - ${magazine['YEAR DATE']}`;
                } else if (magazine['YEAR NUMBER'] == 'SPECIAL2'){
                    img.src= `../imgs/${year_editions[i]}/SPECIAL2.jpg`;
                    p.innerHTML = `${magazine.MONTH} - ${magazine['YEAR DATE']}`;
                } else {
                    // This conditional was only needed because I didn't want to covert the .webp files of the first 7 years into .jpg
                    if(year_editions[i] <= 7) {
                        img.src= `../imgs/${year_editions[i]}/${magazine['YEAR NUMBER']}.webp`;
                    } else {
                       img.src= `../imgs/${year_editions[i]}/${magazine['YEAR NUMBER']}.jpg`
                    }
                    p.innerHTML = `${magazine.MONTH} - ${magazine['YEAR DATE']}`;
                }
                //console.log(img.src);
                const p2 = document.createElement('p');
                p2.innerHTML = `${magazine.OWNED == 'YES' ? 'Owned' : 'Pending'}`;
                p2.style.fontWeight = 'bold';

                if(p2.innerText == 'Owned') {
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

