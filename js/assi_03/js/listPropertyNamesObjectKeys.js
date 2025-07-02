console.log("--- List Property Names (Object.keys()) ---");

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

const bookKeys = Object.keys(book);

console.log("Book Object:", book);
console.log("Property Names (Keys):", bookKeys);

const emptyObject = {};
console.log("Keys of an empty object:", Object.keys(emptyObject));