function poorConditionMagazines(inventory, img_ext) {
    covers_container.innerHTML = '';

    const h2 = document.getElementById('year');
    h2.innerHTML = "Poor Condition Magazines";

    inventory.forEach(magazine => {
        if(magazine.OWNED == "YES-POOR") {
            const div = document.createElement('div');
            const img = document.createElement('img');
            const p = document.createElement('p');
            if(magazine['YEAR NUMBER'] == 'SPECIAL') {
                img.src= `./imgs/${magazine['YEAR EDIT']}/SPECIAL.${img_ext}`;
                p.innerHTML = `${magazine.MONTH} - ${magazine['YEAR DATE']}`;
            } else if (magazine['YEAR NUMBER'] == 'SPECIAL2'){
                img.src= `./imgs/${magazine['YEAR EDIT']}/SPECIAL2.${img_ext}`;
                p.innerHTML = `${magazine.MONTH} - ${magazine['YEAR DATE']}`;
            } else {
                img.src= `./imgs/${magazine['YEAR EDIT']}/${magazine['YEAR NUMBER']}.${img_ext}`;
                p.innerHTML = `${magazine.MONTH} - ${magazine['YEAR DATE']}`;
            }

            const p6 = document.createElement('p');

            const poster_theme = magazine['POSTER THEME'];
            const poster_theme_p = document.createElement('p');
            poster_theme_p.style.display = 'none';
            if(poster_theme !== '?') {
                poster_theme_p.innerHTML = `<b>Poster theme</b>: ${poster_theme}.`;
            } else {
                poster_theme_p.innerHTML = `<b>Poster theme</b>: Unknown.`;
            }

            p6.addEventListener('click', ()=> {
                if(poster_theme_p.style.display == 'none') {
                    poster_theme_p.style.display = 'block';
                } else if(poster_theme_p.style.display == 'block') {
                    poster_theme_p.style.display = 'none';
                }
            });
            
            // Not necessary
            const p2 = document.createElement('p');
            if(magazine.OWNED == 'YES') {
                p2.innerHTML = 'Owned';
                p6.innerHTML = `<b>Poster</b>: ${magazine['POSTER']}`;
            } else if(magazine.OWNED == 'YES-POOR') {
                p2.innerHTML = 'Owned (poor)';
                p6.innerHTML = `<b>Poster</b>: ${magazine['POSTER']}`;
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

            const p5 = document.createElement('p');
            p5.innerHTML = `<b>Observation</b>: ${magazine['OBSERVATION']}.`;
            p5.style.display = 'none';

            p2.addEventListener('click', ()=> {
                if(p5.style.display == 'none') {
                    p5.style.display = 'block';
                } else if(p5.style.display == 'block') {
                    p5.style.display = 'none';
                }
            });
            
            div.appendChild(img);
            div.appendChild(p3);
            div.appendChild(p4);
            div.appendChild(p);
            div.appendChild(p6);
            div.appendChild(poster_theme_p);
            div.appendChild(p2);
            div.appendChild(p5);
            covers_container.appendChild(div);
        }
    });
    const section2 = document.querySelector('.section2');
    section2.style.display = 'block';
}

export default poorConditionMagazines;