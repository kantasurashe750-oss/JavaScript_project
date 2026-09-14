// Challenge 36 — Word Analyzer
// Let's move away from numbers and practice strings + loops.
// let word = "javascript";
// Find:
// 1. ⭐ Number of characters
// 2. ⭐ Count how many vowels (a, e, i, o, u)
// 3. Count how many consonants

let word = "javascript";

number = word.length;

console.log(number);

let count =0;

for( let letter of word){

   if( "aeiou".includes(letter)){
    count++;
   }
}

console.log(count);


let constant = count - letter;

console.log(constant);
