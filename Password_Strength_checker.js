// Challenge 30 — Password Strength Checker
// Your program receives a password.
// It should check the password using these rules:
// Rules
// A password is Strong if:
// - Length is at least 8 characters
// - Contains at least one uppercase letter
// - Contains at least one number
// Otherwise → Weak
// Example
// Hello123 → Strong
// hello123 → Weak
// HELLO → Weak

let password = document.querySelector("#number");

if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)){

    console.log("strong");
    
}else {

    console.log("Weak");
    
}