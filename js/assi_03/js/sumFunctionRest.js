console.log("--- Sum Function (Rest Parameter) ---");

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum of 1, 2, 3:", sum(1, 2, 3));
console.log("Sum of 10, 20, 30, 40:", sum(10, 20, 30, 40));
console.log("Sum of 5:", sum(5));
console.log("Sum of no arguments:", sum());