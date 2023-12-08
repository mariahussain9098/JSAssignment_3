console.log("============>Practice Exercise 6<===============");
// Practice exercise 6.1
// document.write("-------------Practice exercise 6.1------------");
function addNumbers(num1, num2){
    console.log("Addition of num1 & num2 is : ", num1 + num2);
}
addNumbers(10,5);
addNumbers(20,15);


// Practice exercise 6.2
// document.write("-------------Practice exercise 6.2------------");

let fruits = ["apple", "mango", "banana", "orange", "grapes"];

let userGuess = prompt("Guess a name of fruit");

let randomValue = Math.floor(Math.random() * fruits.length);

let correctGuess = fruits[randomValue];

function guessName(){
    let result;
    if(userGuess === correctGuess){
        console.log(`Congrats! Your guess is correct: ${userGuess}`);
    }else{
        console.log(`wrong guess: ${userGuess}`);
    }
    return result = `User guess is ${userGuess}, Correct Value is ${correctGuess}`;
}
result = guessName();
console.log(result);


// Practice exercise 6.3
// document.write("-------------Practice exercise 6.3------------");

function calOpr(number1, number2, opr = "+"){
    let result;
    if(opr == "+"){
        result = number1 + number2;
    }
    else if(opr == "-"){
        result = number1 - number2;
    }else{
        result = number1 + number2;
    }
    return result;
}
console.log(calOpr(40, 30, "-")); 
console.log(calOpr(25, 25, "+")); 
console.log(calOpr(10, 3)); 


// Practice exercise 6.4
// document.write("-------------Practice exercise 6.4------------");

let arr = [];
for(let i = 0; i < 10; i++){
    value1 = i * 5;
    value2 = i * i;
    function sum(num1, num2){
        return output = num1 + num2;
    }
    let result = sum(value1, value2);
    arr.push(result);
}
console.log(arr);


