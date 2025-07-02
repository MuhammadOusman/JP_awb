console.log("--- Block Scope ---");



(function() {
if (true) {
    var varBlock = "I am var in block";
    let letBlock = "I am let in block";
    const constBlock = "I am const in block";

    console.log("Inside block:");
    console.log("varBlock:", varBlock);
    console.log("letBlock:", letBlock);
    console.log("constBlock:", constBlock);
}

console.log("Trying to log variables outside the block:");
console.log("Outside block (varBlock):", varBlock);

try {
    console.log("Outside block (letBlock):", letBlock);
} catch (e) {
    console.error("Outside block (letBlock error):", e.message);
}

try {
    console.log("Outside block (constBlock):", constBlock);
} catch (e) {
    console.error("Outside block (constBlock error):", e.message);
}
})();

