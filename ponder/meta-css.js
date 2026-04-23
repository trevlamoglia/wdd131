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
console.log(student); //does not work, can't access a block variable outside the block
                    