console.log("--- Combining Multiple Arrays (Rest Parameter) ---");



(function() {
function combineArrays(...arrays) {
    let combined = [];
    for (const arr of arrays) {
        combined = [...combined, ...arr];
    }
    return combined;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
const arr3 = [6];

const allCombined = combineArrays(arr1, arr2, arr3);
console.log("Combined Arrays:", allCombined);

const justTwo = combineArrays([10, 20], [30, 40]);
console.log("Just two arrays combined:", justTwo);

const singleArray = combineArrays(["a", "b"]);
console.log("Single array combined:", singleArray);

const noArrays = combineArrays();
console.log("No arrays combined:", noArrays);
})();

