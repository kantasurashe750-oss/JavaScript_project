// Challenge 25 — Employee Performance Bonus
// An employee enters:
// - Basic salary
// - Performance rating (1–5)
// - Years of experience
// Rules
// Basic salary bonus:
// - Salary ≥ ₹50,000 → 20% of salary
// - Salary ≥ ₹30,000 → 10% of salary
// - Below ₹30,000 → 5% of salary
// Performance bonus:
// - Rating 5 → ₹5,000
// - Rating 4 → ₹3,000
// - Rating 3 → ₹1,500
// - Rating below 3 → ₹0
// Experience bonus:
// - Experience ≥ 5 years → ₹2,000
// - Otherwise → ₹0
// Final salary:
// Basic salary + salary bonus + performance bonus + experience bonus

let basic_salary = Number(document.querySelector("#number").value);

let performance_rating = Number(document.querySelector("#number2").value);

let year_of_experience = Number(document.querySelector("#number3").value);

let salary_bonus ;

let performance_bouns ;

let experience_bonus ;

if ( basic_salary >= 50000){

    salary_bonus = basic_salary *  20 / 100;

}else if ( basic_salary >= 30000){

    salary_bonus = basic_salary * 10 / 100;

}else {

    salary_bonus = basic_salary * 5 / 100;
    
}

if (performance_rating === 5){

    performance_bouns  = 5000 ;
    
} else if ( performance_rating === 4 ){

    performance_bouns  = 3000 ;

} else if ( performance_rating === 3 ){

    performance_bouns  = 1500 ;
    
}else if(performance_rating < 3){

    performance_bouns =0;
}

if( year_of_experience >= 5){

    experience_bonus = 2000;

}else {

    experience_bonus = 0;
}

let final_salary = basic_salary + salary_bonus + performance_bouns + experience_bonus;

console.log(final_salary);
