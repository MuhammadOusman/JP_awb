console.log("--- Formatting (Tagged Template) ---");



(function() {
function uppercaseFormatter(strings, ...values) {
    let result = "";
    strings.forEach((str, i) => {
        result += str.toUpperCase();
        if (i < values.length) {
            result += String(values[i]).toUpperCase();
        }
    });
    return result;
}

const productName = "laptop";
const price = 1200;
const formattedOutput = uppercaseFormatter`The ${productName} costs $${price}.`;

console.log(formattedOutput);
})();

