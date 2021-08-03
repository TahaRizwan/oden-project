let number;
function add7(number){
    return number+7;
}
alert(add7(12));

let number1,number2;
function multiply(number1,number2){
    return number1*number2;
}
alert(multiply(10,80));

let string;
function capitalize(string){
    return string[0].toUpperCase()+string.slice(1);
}
alert(capitalize("aHHhH"));

function lastLetter(string){
    return string.slice(-1);
}
alert(lastLetter("ahhhi"));

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

function FuzzBuzz(answer){
    for(let i=1;i<=answer;i++){
    if(((i%3)==0)&&((i%5)==0)){
        console.log("FuzzBuzz")
    }
    else if((i%3)==0){

        console.log("Fuzz");
    }
    else if((i%5)==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}
}
FuzzBuzz(answer);