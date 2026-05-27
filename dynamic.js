const student = [
    {
        last: 'Tinney',
        first: 'Tyler'
    },
    {
        last: 'Jackson',
        first: 'Daniel'
    },
    {
        last: 'McClure',
        first: 'Eldon'
    }
];

let container = document.querySelector('#student_container');

student.forEach(function(item){
    let name = document.createElement('div');
    name.className = 'format';

    let html = `
        <p class='details'>${item.first} ${item.last}</p>
        <hr>
    `;

    container.appendChild(name);
    name.innerHTML = html;
});

const pets = ['cat', 'dog', 'bird'];

const animals = new Array('pig', 'goat', 'sheep');

pets.push('lizard');
console.log(pets);

console.log(pets[0]);

pets[3] = 'bunny';
console.log(pets);

pets.pop();
console.log(pets);

pets.shift();
console.log(pets);