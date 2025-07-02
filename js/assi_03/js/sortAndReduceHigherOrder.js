console.log("--- Sort and Reduce (Higher-Order Function) ---");



(function() {
const words = ["apple", "banana", "cherry", "date"];

function sortAndReduce(arr, sortFn, reduceFn) {
    const sortedArr = [...arr].sort(sortFn);
    const reducedResult = sortedArr.reduce(reduceFn);
    return reducedResult;
}

const alphabeticalSort = (a, b) => a.localeCompare(b);
const concatenateWithSpaces = (acc, word) => acc === "" ? word : `${acc} ${word}`;

const resultString = sortAndReduce(words, alphabeticalSort, concatenateWithSpaces);

console.log("Original words:", words);
console.log("Sorted and concatenated string:", resultString);
})();

