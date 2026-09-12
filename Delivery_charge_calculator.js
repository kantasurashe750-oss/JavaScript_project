//Question:-
// Problem
// Create a program that calculates the final delivery amount.
// Rules
// - Input:
//   - Order amount
//   - Delivery distance in km
// - Free delivery if:
//   - Order amount ≥ ₹1000
// - Otherwise:
//   - Distance ≤ 5 km → ₹50 delivery charge
//   - Distance 6–10 km → ₹100 delivery charge
//   - Distance > 10 km → ₹150 delivery charge
// - If the order amount is below ₹500, add an extra ₹30 small-order charge.
// Example
// Order = ₹800
// Distance = 7 km

// Delivery = ₹100
// Small order charge = ₹30

// Final amount = ₹930

let order = Number(document.querySelector("#number").value);

let Distance = Number(document.querySelector("#number1").value);

let Delivery_charge ;

let small_order = 0;

if ( order >= 1000){

     Delivery_charge = 0;

}else if( Distance <= 5){

     Delivery_charge = 50;

     console.log(Delivery_charge);

}else if( Distance <= 10){

    Delivery_charge = 100;

    console.log(Delivery_charge);
    
}else{

    Delivery_charge =  150;

    console.log(Delivery_charge);
    
}

if ( order < 500){

    small_order = 30;

    console.log(small_order);
    
}

let final_amount = order + Delivery_charge + small_order;

console.log(final_amount);
