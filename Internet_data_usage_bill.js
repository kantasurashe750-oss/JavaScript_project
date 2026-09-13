// Challenge 24 — Internet Data Usage Bill
// Let's make the next one slightly harder.
// A mobile company charges for internet usage:
// - First 5 GB → ₹20/GB
// - Next 5 GB (5–10 GB) → ₹15/GB
// - Above 10 GB → ₹10/GB
// Extra rules
// - If usage is more than 15 GB, add a ₹100 heavy-usage charge.
// - If usage is more than 20 GB, add another ₹200 warning charge.
// Output
// Final bill
// Example
// For 18 GB:
// - First 5 GB → ₹100
// - Next 5 GB → ₹75
// - Remaining 8 GB → ₹80
// - Basic bill = ₹255
// - Heavy charge = ₹100
// - Warning charge = ₹0
// - Final = ₹355

let internet_usage = Number(document.querySelector("#number").value);

let heavy_charge ;

let warning_charge ;

if (internet_usage <= 5){

    bill = internet_usage * 20 ;

}else if ( internet_usage <= 10){

    bill = 5 * 20 + (internet_usage - 5) * 15 ;

}else if( internet_usage > 10 ){

    bill = 5 * 20 + 5 * 15 + ( internet_usage - 10) * 10;
}

if ( internet_usage > 15){

    heavy_charge = 100;

}else {

    heavy_charge = 0 ;
}

if ( internet_usage > 20){

    warning_charge = 200 ;
}else{

    warning_charge =0;
}

let final_bill = bill + heavy_charge + warning_charge;

console.log(final_bill);