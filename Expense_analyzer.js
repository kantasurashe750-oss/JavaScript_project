// Challenge 34 — Expense Analyzer ⭐
// This is closer to a real-world program and uses arrays + loops + conditions.
// You have expenses for one week:
// let expenses = [250, 120, 500, 80, 300, 150, 400];
// Your program should eventually find:
// 1. ⭐ Total weekly expense
// 2. Highest expense
// 3. Lowest expense
// 4. Number of expenses above ₹300
// 5. Average expense

let expenses = [250, 120, 500, 80, 300, 150, 400];

let total =0 ;

for ( let expense of expenses ){

    total += expense;
}

let highest = expenses[0];

for (let expense of expenses ){

    if (expense > highest){

        highest = expense;
    }
}

console.log(highest);

let lowest = expenses[0];

for (let expense of expenses ){

    if (expense < lowest){

        lowest = expense;
    }
}

console.log(lowest);


console.log(lowest);

let count = 0;

for (let expense of expenses){

    if (expense > 300){

        count++;
        
    }
}
console.log(count);

for(let expense of expenses){

    average = total / expenses.length;
}
 console.log(average);
 