console.log("--- Merging Arrays (Spread Operator) ---");

const array1 = [10, 20];
const array2 = [30, 40, 50];

const mergedArray = [...array1, ...array2];

console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Merged Array:", mergedArray);

const array3 = [60, 70];
const superMergedArray = [...array1, ...array2, ...array3];
console.log("Super Merged Array:", superMergedArray);