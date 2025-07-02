console.log("--- Conditional Logic (Template Literal) ---");



(function() {
const currentHour = new Date().getHours();

const timeOfDayMessage = `Good ${currentHour < 12 ? "morning" : "afternoon"}! The current hour is ${currentHour}.`;

console.log(timeOfDayMessage);
})();

