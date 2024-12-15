function posterNeededMagazines(inventory, img_ext) {
    covers_container.innerHTML = '';

    const h2 = document.getElementById('year');
    h2.innerHTML = "Poster Needed Magazines";

    inventory.forEach(magazine => {
        if(magazine['POSTER']) {

            const check = magazine['POSTER'].includes('MISSING');
            
            if(check) {
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
                
                const p2 = document.createElement('p');
                if(magazine.OWNED == 'YES') {
                    p2.innerHTML = 'Owned';
                } else if(magazine.OWNED == 'YES-POOR') {
                    p2.innerHTML = 'Owned (poor)';
                }
    
                p6.innerHTML = `<b>Poster</b>: ${magazine['POSTER']}`;
                
                p2.style.fontWeight = 'bold';
                p2.style.color = '#00913f';
     
    
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
                div.appendChild(p2);
                div.appendChild(p5);
                covers_container.appendChild(div);
            }
        }
    });
    const section2 = document.querySelector('.section2');
    section2.style.display = 'block';
}

export default posterNeededMagazines;