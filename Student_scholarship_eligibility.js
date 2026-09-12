// question :-
// Problem
// Create a program to check whether a student is eligible for a scholarship.
// Rules
// The student gets a scholarship if:
// - Marks are 75 or more
// - AND attendance is 80% or more
// Otherwise → Not eligible
// Additionally:
// - If marks are 90 or more AND attendance is 90% or more → Special Scholarship
// Examples
// Marks = 82
// Attendance = 85%

// → Scholarship Eligible
// Marks = 95
// Attendance = 92%

// → Special Scholarship
// Marks = 80
// Attendance = 70%

// → Not Eligible

let Marks = Number(document.querySelector("#number").value);

let Attendance = Number(document.querySelector("#number1").value);

if ( Marks >= 90 && Attendance >= 90){

    console.log("special scholarship ");
    
}else if ( Marks >= 75 && Attendance >= 80){

    console.log("Get scholarship");
    
}else {

    console.log("Not Eligible");
    
}