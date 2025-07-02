console.log("--- Variable Scope (Closure related) ---");



(function() {
function outer() {
    const x = "I am from outer function";
    console.log("Inside outer function, x (before inner call):", x);

    function inner() {
        console.log("Inside inner function, x:", x);
    }

    inner();
    console.log("Inside outer function, x (after inner call):", x);
}

outer();
})();

