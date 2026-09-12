// Problem
// Create a program that takes:
// - Distance travelled in km
// - Fuel efficiency in km/litre
// - Fuel price per litre
// Then calculate:
// 1. Fuel used
// 2. Total fuel cost
// Example
// Distance = 300 km
// Efficiency = 15 km/litre
// Fuel price = ₹100/litre

// Fuel used = 20 litres
// Total cost = ₹2000

//fuel cost fromula

// fuel_used = distance / efficiency;
// total_cost = fuel_used * fuel_price;

let distance = Number(document.querySelector("#number").value);

let efficiency = Number(document.querySelector("#number1").value);

let fuel_price = Number(document.querySelector("#number2").value);

let fuel_use = distance / efficiency;

let total_cost = fuel_use * fuel_price;

console.log(fuel_price);

console.log(total_cost);

