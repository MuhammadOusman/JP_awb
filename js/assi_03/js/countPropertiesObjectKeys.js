console.log("--- Count Properties (Object.keys()) ---");

const student = {
    name: "Sarah Johnson",
    age: 16,
    grade: "10th",
    school: "Central High"
};

const studentKeys = Object.keys(student);
const numberOfProperties = studentKeys.length;

console.log("Student Object:", student);
console.log("Number of properties:", numberOfProperties);

const car = { make: "Ford", model: "Focus" };
console.log("Number of properties in car object:", Object.keys(car).length);