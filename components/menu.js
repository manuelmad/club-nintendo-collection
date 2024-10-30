const editions_menu = document.getElementById('editions_menu');

let link_to_mexican;
let link_to_caribbean;
let link_to_chilean;

// Creating an href depending on the pathname the user is at
// if(window.location.pathname == '/index.html') {
//     link_to_mexican = '#';
//     link_to_caribbean = './caribbean_collection/caribbean.html';
//     link_to_chilean = './chilean_collection/chilean.html';
// } else if(window.location.pathname == '/caribbean_collection/caribbean.html') {
//     link_to_mexican = '../index.html';
//     link_to_caribbean = '#';
//     link_to_chilean = '../chilean_collection/chilean.html';
// } else if(window.location.pathname == '/chilean_collection/chilean.html') {
//     link_to_mexican = '../index.html';
//     link_to_caribbean = '../caribbean_collection/caribbean.html';
//     link_to_chilean = '#';
// }

if(window.location.pathname == '/') {
    link_to_mexican = '#';
    link_to_caribbean = './caribbean_collection/caribbean';
    link_to_chilean = './chilean_collection/chilean';
} else if(window.location.pathname == '/caribbean_collection/caribbean') {
    link_to_mexican = '../';
    link_to_caribbean = '#';
    link_to_chilean = '../chilean_collection/chilean';
} else if(window.location.pathname == '/chilean_collection/chilean') {
    link_to_mexican = '../';
    link_to_caribbean = '../caribbean_collection/caribbean';
    link_to_chilean = '#';
}

const menu = `
    <div><a href="${link_to_caribbean}">Caribbean</a></div>
    <div><a href="${link_to_mexican}">Mexican</a></div>
    <div><a href="${link_to_chilean}">Chilean</a></div>
`;

editions_menu.innerHTML = menu;

console.log(location.href);
console.log(window.location);
console.log(window.location.pathname);
