console.log("--- List Property Values (Object.values()) ---");



(function() {
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Sci-Fi"
};

const movieValues = Object.values(movie);

console.log("Movie Object:", movie);
console.log("Property Values:", movieValues);

const mixedData = { a: 1, b: "hello", c: true };
console.log("Values of mixedData:", Object.values(mixedData));
})();

