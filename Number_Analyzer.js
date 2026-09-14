// Number Analyzer ⭐
// This is a new type of logic problem. No bill, salary, discount, or percentage calculation.
// 🎯 Problem
// Take one positive integer as input.
// Your program should eventually find:
// 1. Number of digits
// 2. Sum of digits
// 3. Reverse of the number
// // 4. Whether the number is a Palindrome

let number = 12345;
 
let count = 0;

let sum =   0;

let reverse = 0 ;

let original = number;

while( number > 0){

    count++;

    number = math.fath(number / 10);

    sum = sum + (number * 10);

    reverse = reverse * 10 + (number % 10); 

    if ( original === reverse){

        console.log("palindrome");
        
    }else{

        console.log(" not palindrome");
        
    }

}