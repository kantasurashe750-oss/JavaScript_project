let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

calculate.addEventListener("click", function () {

    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;

    let answer;

    switch (operator) {

        case "+":
            answer = number1 + number2;
            break;

        case "-":
            answer = number1 - number2;
            break;

        case "*":
            answer = number1 * number2;
            break;

        case "/":
            answer = number1 / number2;
            break;
    }

    result.textContent = "Result: " + answer;
});
