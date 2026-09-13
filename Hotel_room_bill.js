// Challenge 27 — Hotel Room Bill
// This one adds room type + number of nights + weekend charge.
// Problem
// A hotel charges based on room type:
// - "standard" → ₹1500/night
// - "deluxe" → ₹2500/night
// - "suite" → ₹4000/night
// Extra rules
// Long-stay discount:
// - Nights ≥ 7 → 15% discount
// - Nights ≥ 3 → 10% discount
// - Below 3 → no discount
// Weekend charge:
// - If the booking includes a weekend → add ₹500
// - Otherwise → ₹0
// Final bill
// Room cost − discount + weekend charge

let room_type = Number(document.querySelector("#number1").value);

let Number_of_night = Number(document.querySelector("#number2").value);

let weekend = Number(document.querySelector("#number3").value);

let room_cost ;

let discount ;

let weekend_charge ;

if( room_type === "standard" ){

    room_cost = 1500 * Number_of_night;

}else if ( room_type === "deluxe"){

    room_cost = 2500 * Number_of_night;

}else if( room_type === "suite"){

    room_cost = 4000 * Number_of_night;

}

if ( Number_of_night >= 7 ){

    discount = room_cost * 15 / 100;

}else if ( Number_of_night >= 3){

    discount = room_cost * 10 / 100;

}else {

    discount = 0;
}

if ( weekend === "yes" ){

    weekend_charge = 500 ;

}else {

    weekend_charge = 0;
}

let final_bill = room_cost - discount + weekend_charge;

console.log(final_bill);