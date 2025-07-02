console.log("--- Merging Objects (Spread Operator) ---");

const object1 = { a: 1, b: 2, c: 3 };
const object2 = { c: 4, d: 5, e: 6 };

const mergedObject = { ...object1, ...object2 };

console.log("Object 1:", object1);
console.log("Object 2:", object2);
console.log("Merged Object:", mergedObject);
console.log("Observation: For overlapping keys (like 'c'), the value from the *last* object spread into the new object is retained.");

const object3 = { b: 9, f: 7 };
const mergedObjectExtended = { ...object1, ...object2, ...object3 };
console.log("Merged Object (extended):", mergedObjectExtended);