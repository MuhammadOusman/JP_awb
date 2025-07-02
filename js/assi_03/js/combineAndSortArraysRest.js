console.log("--- Combine and Sort Arrays (Rest Operator) ---");



(function() {
function combineAndSort(...arrays) {
    const allElements = [].concat(...arrays);
    return allElements.sort((a, b) => {
        if (typeof a === 'string' && typeof b === 'string') {
            return a.localeCompare(b);
        }
        return a - b;
    });
}

const arrA = [3, 1, 4];
const arrB = [2, 5];
const arrC = [0, 6];
console.log("Combined and sorted numbers:", combineAndSort(arrA, arrB, arrC));

const wordsA = ["apple", "zebra"];
const wordsB = ["banana", "cat"];
console.log("Combined and sorted words:", combineAndSort(wordsA, wordsB));

console.log("Combined and sorted mixed:", combineAndSort([1, "c"], ["b", 2]));
})();

