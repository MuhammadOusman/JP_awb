console.log("--- Nested Template Literals ---");

const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 }
];

const tableHTML = `
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        ${products.map(product => `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>$${product.price.toFixed(2)}</td>
        </tr>`).join('')}
    </tbody>
</table>
`;

console.log("Generated Nested HTML Table:");
console.log(tableHTML);