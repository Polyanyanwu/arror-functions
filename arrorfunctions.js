//function without return keyword
const addTwoNumbers = (a, b) => a + b;
let sum2 = addTwoNumbers(2, 4);
console.log(sum2)

//implicit returns, single parameter no need for parentheses
const saySomething = message => console.log(message);
saySomething("hello there!!");

//no parameter
const sayHello = () => console.log('hello');
sayHello();
console.log(sum2)

const complexNumbers = (a, b) => {
    const sum = a + b;
    return sum * 500
}

let num = complexNumbers(2, 2);
console.log(num);

