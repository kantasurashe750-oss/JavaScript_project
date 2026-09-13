// Problem
// A parking area charges based on the number of hours:
// - First 2 hours → ₹30/hour
// - Next 3 hours (3–5) → ₹20/hour
// - Above 5 hours → ₹10/hour
// Extra rule:
// - If parking time is more than 8 hours, add a ₹50 extra charge.
// Output: Final parking fee.

let numbers_of_hours = Number(document.querySelector("#number").value);

let extra_charge ;

if (numbers_of_hours <= 2){

    parking_fee = numbers_of_hours * 30 ; 

}else if (numbers_of_hours <= 5){

    parking_fee = 2 * 30 + (numbers_of_hours - 2) * 20 ;

} else if ( numbers_of_hours > 5 ){

    parking_fee = 2 * 30 + 3 * 20 + (numbers_of_hours - 5) * 10 ;
}

if ( numbers_of_hours > 8){

    extra_charge = 50 ;

}else{

    extra_charge = 0;

}

let final_fee = parking_fee + extra_charge;

console.log(final_fee);
