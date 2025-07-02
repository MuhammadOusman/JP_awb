console.log("--- Filter and Map (Higher-Order Function) ---");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterAndMap(arr, filterFn, mapFn) {
    const filteredArr = arr.filter(filterFn);
    const mappedArr = filteredArr.map(mapFn);
    return mappedArr;
}

const isOdd = num => num % 2 !== 0;
const square = num => num * num;

const result = filterAndMap(numbers, isOdd, square);

console.log("Original numbers:", numbers);
console.log("Filtered odd numbers and then squared:", result);