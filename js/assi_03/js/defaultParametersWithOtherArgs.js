console.log("--- Default Parameters with Other Arguments ---");



(function() {
function calculateArea(width = 10, height = 5) {
    return width * height;
}

console.log("--- Calculating Area ---");
console.log("Area (no arguments, uses defaults):", calculateArea());
console.log("Area (only width provided):", calculateArea(20));
console.log("Area (both provided):", calculateArea(7, 8));
console.log("Area (only height provided by passing undefined for width):", calculateArea(undefined, 15));
})();

