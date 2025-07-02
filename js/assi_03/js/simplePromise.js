console.log("--- Simple Promise ---");



(function() {
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

console.log("Starting delay...");
delay(2000).then(() => {
    console.log("Hello, world! (after 2 seconds)");
});
console.log("Delay function called, awaiting resolution...");
})();

