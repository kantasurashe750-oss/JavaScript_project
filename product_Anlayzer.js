// Challenge 38 — Product Analyzer
// Let's now practice arrays of objects + conditions + calculation with a different type of problem.
// let products = [
//     { name: "Keyboard", price: 1200, inStock: true },
//     { name: "Mouse", price: 700, inStock: false },
//     { name: "Headphones", price: 1800, inStock: true },
//     { name: "Webcam", price: 2500, inStock: true },
//     { name: "USB Cable", price: 400, inStock: false }
// ];
// Tasks
// 1. ⭐ Find all in-stock product names
// 2. Find all products with price above ₹1000
// 3. Count out-of-stock products
// 4. Find the most expensive product

let products = [
    { name: "Keyboard", price: 1200, inStock: true },
    { name: "Mouse", price: 700, inStock: false },
    { name: "Headphones", price: 1800, inStock: true },
    { name: "Webcam", price: 2500, inStock: true },
    { name: "USB Cable", price: 400, inStock: false }
];

let availableProducts = [];

for ( let product of products){

    if(product.inStock ){

        availableProducts.push(product.name);
    }
}

console.log(availableProducts);

let expensiveProducts = [];

for ( let product of products){

    if(product.price > 1000){

        expensiveProducts.push(product.name)

    }
}

console.log(expensiveProducts);

let outOfStock = 0;

for( let product of products){

    if( !product.inStock){

        outOfStock++;
    }
}

console.log(outOfStock);

let highest = products[0].price;

for( let product of products){

    if (highest < product.price){

        highest = product.price;
    }
}

console.log(highest);


