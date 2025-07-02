console.log("--- Grade Evaluation (Ternary) ---");



(function() {
const score = 85;

const grade =
    (score >= 90) ? "A" :
    (score >= 80) ? "B" :
    (score >= 70) ? "C" :
    (score >= 60) ? "D" :
    "F";

console.log(`Score: ${score}, Grade: ${grade}`);

const score2 = 95;
const grade2 =
    (score2 >= 90) ? "A" :
    (score2 >= 80) ? "B" :
    (score2 >= 70) ? "C" :
    (score2 >= 60) ? "D" :
    "F";
console.log(`Score: ${score2}, Grade: ${grade2}`);

const score3 = 55;
const grade3 =
    (score3 >= 90) ? "A" :
    (score3 >= 80) ? "B" :
    (score3 >= 70) ? "C" :
    (score3 >= 60) ? "D" :
    "F";
console.log(`Score: ${score3}, Grade: ${grade3}`);
})();

