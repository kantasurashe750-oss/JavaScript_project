// let number1 = Number(document.querySelector("#number1").value);
// let number2 = Number(document.querySelector("#number2").value);
// let number3 = Number(document.querySelector("#number3").value);

let Total = 2100//rs;
let discount;
let finalbill ;

if (Total >= 2000){
    discount = Total * 15 / 100;
    finalbill = Total - discount;
}else if(Total >= 1000){
    discount = Total * 10 / 100;
    finalbill = Total - discount;
} else{
    discount= 0 ;
    finalbill = Total - discount;
}
 result.textContent =  `Total : ${Total}`;