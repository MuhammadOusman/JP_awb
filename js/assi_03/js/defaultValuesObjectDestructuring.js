console.log("--- Default Values (Object Destructuring) ---");



(function() {
const settings1 = {
    theme: "dark",
    language: "es"
};

const settings2 = {
    theme: "light"
};

const { theme: theme1, language: language1 = "English" } = settings1;
const { theme: theme2, language: language2 = "English" } = settings2;

console.log("Settings 1 (language provided):");
console.log("Theme:", theme1);
console.log("Language:", language1);

console.log("\nSettings 2 (language NOT provided):");
console.log("Theme:", theme2);
console.log("Language:", language2);
})();

