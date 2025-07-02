console.log("--- Nested Destructuring (Object Rest Operator) ---");



(function() {
const student = {
    id: "S101",
    name: "Emily White",
    grades: [90, 85, 92],
    info: {
        age: 20,
        major: "Computer Science",
        university: "Tech University"
    }
};

const {
    id,
    name,
    info: { major, ...restOfInfo },
    ...restOfStudent
} = student;


console.log("Original student object:", student);
console.log("ID:", id);
console.log("Name:", name);
console.log("Major:", major);
console.log("Rest of info (e.g., university):", restOfInfo);
console.log("Rest of student (e.g., grades):", restOfStudent);
})();

