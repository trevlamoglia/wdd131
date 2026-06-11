const characterCard = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'images/snortleblat.webp',

    attacked() {
        if (characterCard.health <= 0) {
            return;
        }

        characterCard.health -= 20;

        if (characterCard.health < 0) {
            characterCard.health = 0;
        }

        if (characterCard.health <= 0) {
            document.querySelector('#health').textContent = 'Health: 0 (Character has died.)';
        } else {
            document.querySelector('#health').textContent = `Health: ${characterCard.health}`;
        }
    },

    levelUp() {
        characterCard.level += 1;
        document.querySelector('#level').textContent = `Level: ${characterCard.level}`;
    }
};

document.querySelector('#name').textContent = characterCard.name;
document.querySelector('#class').textContent = `Class: ${characterCard.class}`;
document.querySelector('#level').textContent = `Level: ${characterCard.level}`;
document.querySelector('#health').textContent = `Health: ${characterCard.health}`;
document.querySelector('#image').src = characterCard.image;
document.querySelector('#image').setAttribute('alt', characterCard.name);

document.querySelector('#attackBtn').addEventListener('click', () => characterCard.attacked());
document.querySelector('#levelBtn').addEventListener('click', () => characterCard.levelUp());