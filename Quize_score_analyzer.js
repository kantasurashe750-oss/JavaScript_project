// Problem
// You have the marks of 5 quizzes:
// let marks = [8, 6, 10, 7, 4];
// Your program should eventually find:
// 1. Total marks
// 2. Highest mark
// 3. Lowest mark
// 4. Number of quizzes passed
// 5. Average marks
// For example:
// Total: 35
// Highest: 10
// Lowest: 4
// Passed: 4
// Average: 7

let marks = [8, 6, 10, 7, 4];

let total =0 ;

let highest = marks[0];

let lowest = marks[0];

for( let mark of marks){

    total += mark;

}

for (let mark of marks) {
    
    if (mark > highest){
    highest = mark;
   }
}
console.log(highest);

for (let mark of marks){

    if(mark < lowest){

    lowest = mark;
    }
}

console.log(lowest);

let passed = 0;

for (let mark of marks){

    if (mark >= 5){

        passed++;
    }
}

console.log(passed);

for(let mark of marks){

    average = total / mark.length;
}
console.log(average);
