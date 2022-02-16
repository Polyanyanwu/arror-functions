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

const isPalindrome = (str)=> {
    if(str.length > 0){
        str = str.toLowerCase();
        str = str.split(" ").join(''); // remove lower cases
        console.log(str);
        const reverseStr = [...str].reverse().join(''); // create array of each letter, reverse the array and join again with empty string
        console.log(reverseStr);
        if(reverseStr === str) return true;
    }
    return false;
    }
console.log(isPalindrome("ra ce   car"));
console.log(isPalindrome("mumy"));
