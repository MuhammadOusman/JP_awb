console.log("--- Function Scope ---");



(function() {
function testFunctionScope() {
    var varFunc = "I am var in function";
    let letFunc = "I am let in function";
    const constFunc = "I am const in function";

    console.log("Inside function:");
    console.log("varFunc:", varFunc);
    console.log("letFunc:", letFunc);
    console.log("constFunc:", constFunc);
}

testFunctionScope();

console.log("Trying to log variables outside the function:");
try {
    console.log("Outside function (varFunc):", varFunc);
} catch (e) {
    console.error("Outside function (varFunc error):", e.message);
}

try {
    console.log("Outside function (letFunc):", letFunc);
} catch (e) {
    console.error("Outside function (letFunc error):", e.message);
}

try {
    console.log("Outside function (constFunc):", constFunc);
} catch (e) {
    console.error("Outside function (constFunc error):", e.message);
}
})();

