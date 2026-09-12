// Question :-
// Problem
// Create a program to check whether a person is eligible for a job interview.
// Rules
// A person is eligible if:
// - Age is 18 or above
// - AND
// - Either:
//   - Experience is 2 years or more, OR
//   - Qualification is "degree"
// So the logic is:
// Age >= 18
// AND
// (Experience >= 2 OR Qualification = "degree")

let Age = Number(document.querySelector("#number1").value); 

let Experience = Number(document.querySelector("#number2").value); 

let qualification = document.querySelector("#number3").value;

if ( Age >= 18 && (Experience >= 2 || qualification === "degree")){

    console.log("Eligible");
    
}else {

    console.log("Not Eligible");
    
}