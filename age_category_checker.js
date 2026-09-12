let age = Number(document.querySelector("#number").value);

if(age <=12){
    console.log("child");
}else if(age <=17){
    console.log("Teenger");
}else if(age <=59){
    console.log("adult");
}else{
    console.log("senior");
}