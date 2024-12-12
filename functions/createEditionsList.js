function createEditionsList(inventory) {
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

    const  total_magazines = inventory.length;
    //console.log(total_magazines);

    let total_owned_magazines = 0;

    let year_dates_control = 0;

    const ul = document.createElement('ul');

    for(let i=0; i<=year_editions.length - 1; i++) {
        const li = document.createElement('li');
    
        // Counting the total and owned magazines in current year
        let magazines_number = 0;
        let owned_magazines_number = 0;
    
        inventory.forEach(magazine => {
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
    
            inventory.forEach(magazine => {
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

                    const p5 = document.createElement('p');
                    
                    const p2 = document.createElement('p');
                    if(magazine.OWNED == 'YES') {
                        p2.innerHTML = 'Owned';
                    } else if(magazine.OWNED == 'YES-POOR') {
                        p2.innerHTML = 'Owned (poor)';
                        p5.innerHTML = `<b>Observation</b>: ${magazine['OBSERVATION']}.`;
                        p5.style.display = 'none';
            
                        p2.addEventListener('click', ()=> {
                            if(p5.style.display == 'none') {
                                p5.style.display = 'block';
                            } else if(p5.style.display == 'block') {
                                p5.style.display = 'none';
                            }
                        });
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
                    if(p5.innerHTML !== '') {
                        div.appendChild(p5);
                    }
                    covers_container.appendChild(div);
                }
            });
            const section2 = document.querySelector('.section2');
            section2.style.display = 'block';
        });
        ul.appendChild(li);
    }
    years_container.appendChild(ul);

    // show the total count
    const total_count = document.getElementById('total_count');
    total_count.innerHTML =  `Total count: ${total_owned_magazines}/ ${total_magazines} magazines.`;
}

export default createEditionsList;