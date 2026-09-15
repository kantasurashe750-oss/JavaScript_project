// Challenge 39 — Student Performance Analyzer ⭐
// let students = [
//     { name: "Neha", marks: 82 },
//     { name: "Kabir", marks: 45 },
//     { name: "Meera", marks: 67 },
//     { name: "Arjun", marks: 91 },
//     { name: "Tara", marks: 38 }
// ];
// Tasks
// 1. ⭐ Find the average marks
// 2. Find the student with highest marks
// 3. Count students who passed (marks >= 40)
// 4. Create an array containing names of students who scored 70 or more

let students = [
    { name: "Neha", marks: 82 },
    { name: "Kabir", marks: 45 },
    { name: "Meera", marks: 67 },
    { name: "Arjun", marks: 91 },
    { name: "Tara", marks: 38 }
];

let total = students.marks[0] + students.marks[1] + students.marks[2] + students.marks[3] + students.marks[4];

let totalMarks = 0;

for (let student of students){

   totalMarks += student.marks;
}

let avarage;

    avarage = totalMarks / students.length;

console.log(avarage);

let highest = students[0].marks;

for (let student of students){

    if( highest < student.marks){

        highest = student.marks;
    }
}

console.log(highest);


let count = 0;

for (let student of students){

    if ( student.marks >= 40){

        count++;
    }
}

console.log(count);

let topStudent = [];

for (let student of students){

    if(student.marks >= 70){

        topStudent.push(student.name);
    }
}

console.log(topStudent);
