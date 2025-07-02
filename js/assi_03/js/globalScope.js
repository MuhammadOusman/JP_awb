console.log("--- Global Scope ---");



(function() {
var varGlobal = "I am var global";
let letGlobal = "I am let global";
const constGlobal = "I am const global";

console.log("varGlobal:", varGlobal);
console.log("letGlobal:", letGlobal);
console.log("constGlobal:", constGlobal);

console.log("Is varGlobal accessible via window?", window.varGlobal); // True
console.log("Is letGlobal accessible via window?", window.letGlobal); // Undefined (not on window object)
console.log("Is constGlobal accessible via window?", window.constGlobal); // Undefined (not on window object) 
})();

