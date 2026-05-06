// variable vs constant
// variable can be changed, constant cannot be changed
// variable is declared with var or let, constant is declared with const
const pi = 3.14;
let radius = 3;

let area = pi * radius * radius;
console.log(area);

const one = 1;
const two = '2';

let result = one * two;
console.log(result);

result = one + parseInt(two);
console.log(result);


//scope


let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
//console.log(student); //does not work, can't access a block variable outside the block
                    

const title = document.querySelector('h1');
console.log(title);

// toggle the color of the title when it's clicked
title.addEventListener('click', function() {
    title.style.color = 'red';
});

// title.textContent = "Web Page Components";

// PLAY AROUND IN CLASS
document.querySelector('#topics').style.color = 'red';
const topics = document.querySelector('#topics');
topics.style.color = 'purple';

const wrapper = document.getElementById('content');
wrapper.style.backgroundColor = 'peachpuff';

let list = document.querySelector('.list');
list.style.border = '3px solid black';

let para = document.querySelector('p');
para.style.fontSize = '3em';
para.classList.add('background');

let img = document.querySelector('img');
img.setAttribute('src', 'images/logo.jpg')


// DROPDOWN EXAMPLE
const dropdown = document.querySelector('#webdevlist');
const html = document.querySelector('#html');
const css = document.querySelector('#css');
const js = document.querySelector('#js');

dropdown.addEventListener('change', function() {
    html.style.color = 'purple';
    css.style.color = 'purple';
    js.style.color = 'purple';
    let codeValue = dropdown.value;
    document.getElementById(codeValue).style.color = 'red';
}); 
