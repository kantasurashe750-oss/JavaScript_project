let number = Number(document.querySelector("#number").value);

if (number === 0) {
    console.log("Zero:");
} else if (number > 0) {

    if (number % 2 === 0) {
        console.log("Positve Even");
    } else {
        console.log("positvie odd");
    }

} else {
    if (number % 2 === 0) {
        console.log("Negative Even");
    } else {
        console.log("Negative Odd");
    }
}