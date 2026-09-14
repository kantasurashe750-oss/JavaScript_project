// Challenge 33 — Find Duplicate Items ⭐
// This is a new type of logic. We'll practice arrays + nested loops + comparison.
// 🎯 Problem
// Given:
// let numbers = [4, 7, 2, 4, 9, 7, 5];
// Find which numbers appear more than once.
// Expected result:
// Duplicate numbers:
// 4
// 7

for (let i = 0; i < numbers.length; i++) {

    for (let j = 0; j < numbers.length; j++) {

        if (i !== j && numbers[i] === numbers[j]) {
            console.log("Duplicate found");
        }

    }

}