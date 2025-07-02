console.log("--- Rest Parameter with Spread Operator ---");



(function() {
function multiply(factor, ...numbers) {
    const results = numbers.map(num => num * factor);
    return results;
}

const multipliedResult1 = multiply(5, 1, 2, 3, 4);
console.log("Multiply 1,2,3,4 by 5:", multipliedResult1);

const multipliedResult2 = multiply(2, 10, 20);
console.log("Multiply 10,20 by 2:", multipliedResult2);

const multipliedResult3 = multiply(3);
console.log("Multiply nothing by 3:", multipliedResult3);
})();

