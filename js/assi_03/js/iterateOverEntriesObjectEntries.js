console.log("--- Iterate Over Entries (Object.entries()) ---");



(function() {
const settings = {
    theme: "dark",
    notifications: true,
    privacy: "strict"
};

const settingsEntries = Object.entries(settings);

console.log("Settings Object:", settings);
console.log("Iterating over entries:");

settingsEntries.forEach(([key, value]) => {
    console.log(`Key: ${key}, Value: ${value}`);
});
})();

