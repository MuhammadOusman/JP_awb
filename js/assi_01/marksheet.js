const studentName = "Ousman Sohail";
const rollNumber = "CSD231008";
const totalMarks = 500;

let marksMath = 85;
let marksPhysics = 78;
let marksChemistry = 92;
let marksEnglish = 65;
let marksComputer = 88;

const obtainedMarks = marksMath + marksPhysics + marksChemistry + marksEnglish + marksComputer;
const percentage = (obtainedMarks / totalMarks) * 100;

let grade;
if (percentage >= 80) {
    grade = "A+";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
} else {
    grade = "Fail";
}

const markSheet = `
Student Name: ${studentName}<br>
Roll Number: ${rollNumber}<br>
Mathematics: ${marksMath}<br>
Physics: ${marksPhysics}<br>
Chemistry: ${marksChemistry}<br>
English: ${marksEnglish}<br>
Computer: ${marksComputer}<br>
Total Marks: ${totalMarks}<br>
Obtained Marks: ${obtainedMarks}<br>
Percentage: ${percentage.toFixed(2)}%<br>
Grade: ${grade}
`;

document.write(markSheet);