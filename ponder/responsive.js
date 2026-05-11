const menu = document.querySelector('nav');
const btn = document.querySelector('.menu-btn');

btn.addEventListener('click', () => {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
});