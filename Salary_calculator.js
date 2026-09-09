let basic_salary = Number(document.querySelector("#Number").value);

let result = document.querySelector("#number1");

let Gross_salary ;

let HRA;

let DA;

if (basic_salary >= 30000){
    HRA = basic_salary * 20 / 100 ;
    DA = basic_salary * 10 / 100;
}else if(basic_salary >= 20000){
    HRA = basic_salary * 15 / 100;
    DA = basic_salary * 8 / 100;
}else {
    HRA = basic_salary * 10 / 100;
    DA = basic_salary * 5 / 100;
}

Gross_salary = basic_salary + HRA + DA;

result.textContent = `Result : ${Gross_salary}`;