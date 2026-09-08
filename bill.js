let bill = Number(document.querySelector("#number").value);
let result = document.querySelector("#result");

let discount;
let finalBill;

if (bill >= 1000) {

    discount = bill * 10/100;

    finalBill =bill - discount;

} else {

    finalBill =bill ;

}

result.textContent = "Result: " + finalBill;