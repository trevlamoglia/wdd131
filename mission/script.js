let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = 'black';
        logo.setAttribute('src', 'byui-logo-dark.png');
        pageContent.style.color = 'white';
    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = 'white';
        logo.setAttribute('src', 'byui-logo-blue.webp');
    }
}           