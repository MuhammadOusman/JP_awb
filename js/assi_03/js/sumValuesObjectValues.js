console.log("--- Sum Values (Object.values()) ---");

const scores = {
    math: 90,
    science: 85,
    english: 78
};

const scoreValues = Object.values(scores);
const totalSum = scoreValues.reduce((sum, current) => sum + current, 0);

console.log("Scores Object:", scores);
console.log("Score Values:", scoreValues);
console.log("Total Sum of Values:", totalSum);

const expenses = { rent: 1000, utilities: 150, groceries: 300 };
const totalExpenses = Object.values(expenses).reduce((sum, current) => sum + current, 0);
console.log("Total Expenses:", totalExpenses);