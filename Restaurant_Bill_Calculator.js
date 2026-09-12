// Challenge 12 — Restaurant Bill Calculator ⭐
// Create a program that calculates the final restaurant bill.
// Rules
// - Input: bill amount and number of people
// - If bill is ₹2000 or more → 15% discount
// - If bill is ₹1000 or more → 10% discount
// - If bill is below ₹1000 → no discount
// - After discount, calculate amount per person
// Example
// Bill = ₹2500
// People = 5

// Discount = ₹375
// Final Bill = ₹2125
// Per Person = ₹425

let bill = Number(document.querySelector("#Number").value);

let number_of_people = Number(document.querySelector("#number2").value);

if ( bill >= 2000){

  let Discount_bill = bill * 15 / 100;

   console.log(Discount_bill);
   

}else if( bill >= 1000){

  let  Discount_bill = bill *10 / 100;

    console.log(Discount_bill);
    
    
} else {

  let    Discount_bill = 0;
    
}

    let final_bill = bill - Discount_bill;

    console.log(final_bill);

 let per_person = final_bill / number_of_people;

    console.log(per_person);
    

