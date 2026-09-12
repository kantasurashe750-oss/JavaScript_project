// Problem
// A customer enters their electricity units.
// Bill slabs:
// - 0–100 units → ₹5/unit
// - 101–200 units → ₹7/unit
// - Above 200 units → ₹10/unit
// Extra rule:
// - If units are more than 300, add a ₹200 peak-usage charge.
// - Otherwise, peak charge = ₹0.
// Output: Final bill.
// Example:
// - 150 units → Bill ₹850 → Peak charge ₹0 → Final ₹850
// - 350 units → Bill ₹2700 → Peak charge ₹200 → Final ₹2900

let units = Number (document.querySelector("#number1").value);

if (  units <= 100 ){

   bill =units * 5 ;
}else if( units <= 200){
    bill = 100 * 5 + (units - 100) * 7;
}else {
    bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
}

if (units > 300){ 

    peak_charge = 200;
}else {

    peak_charge = 0;
}

let final_value = bill + peak_charge ;