// Challenge 19 — Mobile Data Plan Calculator
// A mobile plan has:
// - Base plan = ₹299
// - Included data = 2 GB
// - If usage is more than 2 GB, extra data costs ₹50 per GB
// - If usage is more than 5 GB, extra data costs ₹40 per GB for the usage above 5 GB
// - If usage is more than 10 GB, add a ₹100 heavy-usage charge
// Example:
// Usage = 7 GB

// Base = ₹299

// First 2 GB → included
// Next 3 GB → 3 × ₹50 = ₹150
// Next 2 GB → 2 × ₹40 = ₹80

// Heavy charge = ₹0

// Final = ₹529

let usage = Number(document.querySelector("#number").value);

let charge;

let base_plan = 299 ;

let final ;

let heavy_charge = 0;

if (usage <= 2) {

    charge = 0 ;

}else if ( usage <= 5){

    charge = (usage - 2) * 50 ;

} else{

    charge = 3 * 50 + (usage - 5 ) * 40 ;

}

if ( usage >= 10 ){

     heavy_charge= 100;
}

final = charge + base_plan + heavy_charge ;

console.log(final);
