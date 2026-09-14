// Inventory Analyzer
// Let's change the problem type so we don't keep doing bill/expense calculations.
// let stock = [12, 5, 0, 18, 3, 0, 25, 7];
// Find:
// 1. ⭐ Total number of items
// 2. ⭐ Highest stock
// 3. ⭐ Count items that are out of stock (0)
// 4. Count items with stock less than 10
// 5. Average stock

let stock = [12, 5, 0, 18, 3, 0, 25, 7];

let total =0;

for(let stock1 of stock){

    total += stock1;
}

let highest = stock[0];

for( let stock1 of stock){

    if( stock1 > highest){

        highest = stock1;
    }
}
console.log(highest);


let count = 0;

for(let stock1 of stock){

    if ( stock1 === 0){

        count++;
    }
}

let count1 =0 ;

for (let stock1 of stock){

    if(stock1 < 10){

        count1++;
    }
}



   let avarage = total / stock.length;

console.log(avarage);
