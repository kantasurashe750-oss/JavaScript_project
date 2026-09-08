let mark1 = Number(document.querySelector("#number1").value);
let mark2 = Number(document.querySelector("#number2").value);
let mark3 = Number(document.querySelector("#number3").value);
let mark4 = Number(document.querySelector("#number4").value);
let mark5 = Number(document.querySelector("#number5").value);

let maximum =500
let total = mark1 +mark2 +mark3 + mark4 + mark5;
let percentage = total / maximum *100;

if (percentage >= 90){
    console.log("Grade A:");
}else if(percentage >= 75){
    console.log("Grade B:");
}else if(percentage >=60){
    console.log("Grade c:");
}else if(percentage >= 40){
    console.log("Fail");
}
