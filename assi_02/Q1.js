let subjects = {
    maths: 90,
    english: 85,
    science: 95,
    history: 80,
    programming: 88
};

let obtMarks = subjects.maths + subjects.english + subjects.science +
               subjects.history + subjects.programming;

const totalMarks = 500;
let percentage = (obtMarks / totalMarks) * 100;

let grade = percentage >= 80 ? "A" :
        percentage >= 70 ? "B" :
        percentage >= 60 ? "C" :
        percentage >= 50 ? "D" : "F";

        
 document.write(`
            <h1>Student Mark Sheet</h1>
            <table border="1">
                <tr><th>Subject</th><th>Marks</th></tr>
                <tr><td>Maths</td><td>${subjects.maths}</td></tr>
                <tr><td>English</td><td>${subjects.english}</td></tr>
                <tr><td>Science</td><td>${subjects.science}</td></tr>
                <tr><td>History</td><td>${subjects.history}</td></tr>
                <tr><td>Programming</td><td>${subjects.programming}</td></tr>
                <tr><th>Total</th><th>${obtMarks}/${totalMarks}</th></tr>
                <tr><th>Percentage</th><th>${percentage.toFixed(2)}%</th></tr>
                <tr><th>Grade</th><th>${grade}</th></tr>
            </table>
        `);
