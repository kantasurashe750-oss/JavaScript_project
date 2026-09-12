// Problem
// A customer buys 3 items.
// Take as input:
// - Price of item 1
// - Price of item 2
// - Price of item 3
// Rules:
// - If total ≥ ₹3000 → 20% discount
// - If total ≥ ₹1500 → 10% discount
// - Otherwise → no discount
// - Then calculate the final bill
// Example:
// Item 1 = ₹1200
// Item 2 = ₹900
// Item 3 = ₹1000

// Total = ₹3100
// Discount = 20% = ₹620
// Final bill = ₹2480

let price1 = Number(document.querySelector("#number1").value);
let price2 = Number(document.querySelector("#number2").value);
let price3 = Number(document.querySelector("#number3").value);

let total = price1 + price2 + price3;

let bill ;

let discount ;

if (total >= 3000){

    discount = total * 20 /100;

}else if ( total >= 1500){

    discount = total * 10 / 100;

}else {

    discount = 0 ;
}

let final_bill = total - discout;

console.log(final_bill);


