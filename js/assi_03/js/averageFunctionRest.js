console.log("--- Average Function (Rest Parameter) ---");



(function() {
function average(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

console.log("Average of 1, 2, 3:", average(1, 2, 3));
console.log("Average of 10, 20, 30, 40, 50:", average(10, 20, 30, 40, 50));
console.log("Average of 7:", average(7));
console.log("Average of no arguments:", average());
})();

