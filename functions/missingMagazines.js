function missingMagazines(inventory, img_ext, inventory2) {

    covers_container.innerHTML = '';

    const h2 = document.getElementById('year');
    h2.innerHTML = "Missing Magazines";

    inventory.forEach(magazine => {
        if(magazine.OWNED == "NO") {
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
            

            // Not necessary
            const p2 = document.createElement('p');
            if(magazine.OWNED == 'YES') {
                p2.innerHTML = 'Owned';
            } else if(magazine.OWNED == 'YES-POOR') {
                p2.innerHTML = 'Owned (poor)';
            } else if(magazine.OWNED == 'NO') {
                const test = inventory2.find(mag => mag["OVERALL NUMBER"] == magazine["OVERALL NUMBER"] && (mag.OWNED == 'YES' || mag.OWNED == 'YES-POOR'));
                if(test && test["OVERALL NUMBER"]<85) {
                    p2.innerHTML = 'Pending (see other)';
                } else {
                    p2.innerHTML = 'Pending';
                }
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

export default missingMagazines;