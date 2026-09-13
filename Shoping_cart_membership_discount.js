// Problem
// A customer enters:
// - Total shopping amount
// - Membership type ("premium" or "normal")
// Rules
// Shopping discount:
// - Total ≥ ₹5000 → 20% discount
// - Total ≥ ₹2500 → 10% discount
// - Below ₹2500 → 0%
// Membership discount:
// - Premium member → additional ₹300 discount
// - Normal member → ₹0
// Final bill:
// Total − shopping discount − membership discount
// Example
// For:
// - Total = ₹6000
// - Membership = "premium"
// Then:
// - Shopping discount = ₹1200
// - Membership discount = ₹300
// - Final bill = ₹4500

let shopping = Number(document.querySelector("#number1").value);

let membership = Number(document.querySelector("#number2").value);

let discount ;

let membership_discount ;

if(shopping >= 5000){

    discount = shopping * 20 / 100 ;

}else if( shopping >= 2500){

    discount = shopping * 10 / 100;

}else{

    discount =0 ;

}  

 if( membership === "premium"){

    membership_discount = 300 ;

 } else{

    membership_discount = 0 ;
 }

 let final_bill = shopping - discount - membership_discount ;

 console.log(final_bill);
 