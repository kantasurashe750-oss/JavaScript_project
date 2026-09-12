let balance = 5000;

let withdrawn = Number(document.querySelector("#number2").value);

let remaining;

if(withdrawn > balance){

    console.log("Insuffiencent balance");

}else if(withdrawn % 100 !== 0){

    console.log("Invalid amount");

}else {

    remaining = balance - withdrawn;

    console.log(remaining);
}

// question ***

// Create an ATM withdrawal program.
// Input:
// - Account balance
// - Withdrawal amount
// Rules:
// 1. If withdrawal amount is greater than balance → "Insufficient Balance"
// 2. If withdrawal amount is not a multiple of ₹100 → "Enter amount in multiples of 100"
// 3. Otherwise → calculate the remaining balance
// Example:
// Balance = ₹5000
// Withdrawal = ₹1200

// Remaining Balance = ₹3800