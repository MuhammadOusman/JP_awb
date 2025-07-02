console.log("--- Filter Even Numbers (Rest Operator) ---");

function filterEven(...numbers) {
    return numbers.filter(num => num % 2 === 0);
}

console.log("Even numbers from 1,2,3,4,5,6:", filterEven(1, 2, 3, 4, 5, 6));
console.log("Even numbers from 10,15,20,25,30:", filterEven(10, 15, 20, 25, 30));
console.log("Even numbers from no arguments:", filterEven());
console.log("Even numbers from odd numbers:", filterEven(1,3,5,7));