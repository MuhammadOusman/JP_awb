console.log("--- Loops within Template Literals ---");



(function() {
const shoppingList = ["Milk", "Eggs", "Bread", "Cheese"];

const htmlList = `
<ul>
    ${shoppingList.map(item => `    <li>${item}</li>`).join('\n')}
</ul>
`;

console.log("Generated HTML List:");
console.log(htmlList);
})();

