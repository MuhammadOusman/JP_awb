console.log("--- Array Parameters (Destructuring) ---");



(function() {
function printCoordinates([x, y]) {
    console.log(`Coordinates: X=${x}, Y=${y}`);
}

printCoordinates([10, 20]);
printCoordinates([0, 0]);
printCoordinates([-5, 15]);

function printCoordinatesWithDefaults([x = 0, y = 0]) {
    console.log(`Coordinates (with defaults): X=${x}, Y=${y}`);
}
printCoordinatesWithDefaults([5]);
printCoordinatesWithDefaults([]);
})();

