// Dropdown Menu
const menuButton = document.querySelector('.menu-btn');
const navMenu = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Toggle the 'show' class to display/hide the menu
    menuButton.classList.toggle('change');
});


// Modals
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    const img = e.target.closest('img');
    if (!img) return;

// console.log(e.target);

    modalImage.src = img.src;
    modalImage.alt = img.alt;

    modal.showModal();
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});