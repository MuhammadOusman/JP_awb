console.log("--- Discount Eligibility (Ternary) ---");

const isMember = true;
const purchaseAmount = 150;

const discount = (isMember && purchaseAmount > 100) ? (purchaseAmount * 0.10) : 0;

console.log(`Is Member: ${isMember}, Purchase Amount: $${purchaseAmount}, Discount: $${discount.toFixed(2)}`);

const isMember2 = false;
const purchaseAmount2 = 150;
const discount2 = (isMember2 && purchaseAmount2 > 100) ? (purchaseAmount2 * 0.10) : 0;
console.log(`Is Member: ${isMember2}, Purchase Amount: $${purchaseAmount2}, Discount: $${discount2.toFixed(2)}`);

const isMember3 = true;
const purchaseAmount3 = 80;
const discount3 = (isMember3 && purchaseAmount3 > 100) ? (purchaseAmount3 * 0.10) : 0;
console.log(`Is Member: ${isMember3}, Purchase Amount: $${purchaseAmount3}, Discount: $${discount3.toFixed(2)}`);