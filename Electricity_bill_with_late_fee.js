// Problem
// Create an electricity bill calculator:
// Units:
// - First 100 units → ₹5/unit
// - 101–200 units → ₹7/unit
// - Above 200 units → ₹10/unit
// Late fee:
// - If the bill is ₹1500 or more, add a ₹100 late fee.
// - Otherwise, no late fee.
// Final bill:
// Final bill = Bill + Late fee

let units = Number(document.querySelector("#number").value);

let bill ;

let final_bill ;

let late_fee;

if ( units <= 100 ){

    bill = units * 5; 

}else if( units <= 200){

    bill = 100 * 5 + (units - 100) * 7 ;

} else {

    bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
}

if( bill >= 1500){

    late_fee = 100 

}else{

    late_fee =0;
}

final_bill = bill + late_fee;

console.log(final_bill);
