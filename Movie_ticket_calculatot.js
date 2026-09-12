//Question :-
// Challenge 10 — Movie Ticket Calculator
// Let's increase the difficulty a little.
// A cinema has these ticket prices:
// - Child (age ≤ 12) → ₹100
// - Teenager (13–17) → ₹150
// - Adult (18–59) → ₹200
// - Senior (60+) → ₹120
// There is also a 20% discount if the customer books 5 or more tickets.
// Example
// Age = 25
// Tickets = 6
// First calculate:
// 6 × ₹200 = ₹1200
// Then apply 20% discount:
// ₹1200 × 20 / 100 = ₹240
// Final:
// ₹1200 - ₹240 = ₹960

let age = Number(document.querySelector("#number").value);

let number_of_ticket = Number(document.querySelector("#number2").value);



if(age <= 12){
     
    console.log("100");

    calculate_total = 100 * number_of_ticket;

    console.log(calculate_total);

    if(number_of_ticket >= 5){

        ticket = calculate_total * 20 / 100;
        
        final_price = calculate_total - ticket;

        console.log(final_price);

    }else {

      finalPrice = calculate_total;

      console.log(finalPrice);

    }

}else if(age <= 17){

    console.log("150");

    
    calculate_total= 150 * number_of_ticket;

    console.log(calculate_total);

    if(number_of_ticket >= 5){

        ticket = calculate_total * 20 / 100;

        final_price = calculate_total - ticket;

        console.log(final_price);
    }else{
        finalPrice = calculate_total;

      console.log(finalPrice);

    }

}else if(age <= 59){

    console.log("200");

    
    calculate_total = 200 * number_of_ticket;

    console.log(calculate_total);

    if(number_of_ticket >= 5){

        ticket = calculate_total * 20 / 100;

        final_price = calculate_total - ticket;

        console.log(final_price);
    }else{

        finalPrice = calculate_total;

      console.log(finalPrice);
          
    }

}else{

    console.log("120");

    
    calculate_total = 120 * number_of_ticket;

    console.log(calculate_total);

    if(number_of_ticket >= 5){

        ticket = calculate_total * 20 / 100;

        final_price = calculate_total - ticket;

        console.log(final_price);
    }else {
        
        finalPrice = calculate_total;

       console.log(finalprice);

    }
}