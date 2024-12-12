function poorConditionMagazines(inventory) {
    covers_container.innerHTML = '';

    const h2 = document.getElementById('year');
    h2.innerHTML = "Poor Condition Magazines";

    inventory.forEach(magazine => {
        if(magazine.OWNED == "YES-POOR") {
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
    const section2 = document.querySelector('.section2');
    section2.style.display = 'block';
}

export default poorConditionMagazines;