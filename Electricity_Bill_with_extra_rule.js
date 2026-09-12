// Problem
// Create an electricity bill calculator.
// Electricity charges
// - First 100 units → ₹5/unit
// - 101–200 units → ₹7/unit
// - Above 200 units → ₹10/unit
// Extra rule
// If the final bill before discount is ₹1500 or more, give a 10% discount.
// Example
// Units = 250

// First 100 = 100 × ₹5 = ₹500
// Next 100 = 100 × ₹7 = ₹700
// Remaining 50 = 50 × ₹10 = ₹500

// Bill = ₹1700

// Discount = ₹170
// Final bill = ₹1530 

let units = Number(document.querySelector("#number").value);

let bill ;

let discount ;

let final_bill ;

if ( units <= 100){

    bill = units * 5  ; 

}else if ( units <= 200){

    bill = 100 * 5 + (units - 100) * 7   ; 

    
}else {

    bill = 100 * 5 + 100 * 7 (units - 200) * 10  ;

}

if ( bill >= 1500 ) {

    discount = bill * 10 / 100 ;

}else {

    discount = 0 ;
}

final_bill = bill - discount;

console.log(final_bill);
