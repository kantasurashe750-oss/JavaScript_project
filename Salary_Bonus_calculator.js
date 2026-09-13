// Problem
// A company calculates an employee's salary:
// Input:
// - Basic salary
// - Years of experience
// Rules:
// 1. HRA
//    - Basic ≥ ₹30,000 → HRA = 20%
//    - Basic ≥ ₹20,000 → HRA = 15%
//    - Below ₹20,000 → HRA = 10%
// 2. Bonus
//    - Experience ≥ 5 years → ₹5,000 bonus
//    - Otherwise → ₹2,000 bonus
// 3. Final salary
//    - Basic + HRA + Bonus

let basic_salary = Number(document.querySelector("#number").value);

let year_of_experience = Number(document.querySelector("#number1").value);

let HRA ;

let bonus ;

if ( basic_salary >= 30000){

    HRA = basic_salary * 20 / 100 ;

} else if ( basic_salary >= 20000){

    HRA = basic_salary * 15 / 100 ;

}else {

    HRA = basic_salary * 10 /100;

}

if (year_of_experience >= 5 ){

    bonus = 5000;

} else {

    bonus = 0;

}

let final_salary = bonus + basic_salary + HRA;

console.log(final_salary);
