// Practice exercise 5.1
// document.write("-------------Practice exercise 5.1------------");

const maxValue = 5;

const solution = Math.floor(Math.random() * maxValue) + 1;
console.log("Solution:", solution); 

let isCorrect = false;

while (!isCorrect) {
  const userGuess = prompt(`Enter a number between 1 and ${maxValue}:`);
  const guessNumber = Number(userGuess);

  if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > maxValue) {
    alert("Invalid input. Please enter a valid number between 1 and 5.");
    continue;
  }

  if (guessNumber === solution) {
    isCorrect = true;
    alert("Congratulations! You guessed the correct number!");
  } else {
    if (guessNumber > solution) {
      alert("Too high. Try again!");
    } else {
      alert("Too low. Try again!");
    }
  }
}



// ----------------- Practice Exercise 5.2 ---------------------------
// document.write("<h2>----------------Practice Exercise 5.2--------------</h2>")
let counter = 0;

alert("initial value of conuter is : " + counter );
do{
    let step = prompt("Enter the value you want to add in counter");
    step = parseInt(step);

    counter = counter + step;
    if(counter < 100){
    alert("counter's new value is : " + counter + ", add another value for reaching 100 or > 100");
    console.log("counter's new value is : " + counter + ", add another value for reaching 100 or > 100");
    }else{
    alert("Great! You cross 100, Final value of counter is : " + counter);
    console.log("Great! You cross 100, Final value of counter is : " + counter);
    }

}while(counter < 100)


// ----------------- Practice Exercise 5.3 ---------------------------
// document.write("<h2>----------------Practice Exercise 5.3--------------</h2>")

let myWork = [];

for (let i = 1; i <= 10; i++) {
    let status = i % 2 === 0 ? true : false;

    let lesson = {
        name: 'Lesson ' + i,
        status: status
    };

    myWork.push(lesson);
}

console.log(myWork);


// ----------------- Practice Exercise 5.4 ---------------------------
// document.write("<h2>----------------Practice Exercise 5.4--------------</h2>")

let myTable = [];
let numRows = 4; 
let numCols = 5; 
let cntr = 0;

for (let i = 0; i < numRows; i++) {
    let tempTable = [];

    for (let j = 0; j < numCols; j++) {
        cntr++;
        tempTable.push(cntr);
    }
    myTable.push(tempTable);
}

console.table(myTable);



// ----------------- Practice Exercise 5.5 ---------------------------
// document.write("<h2>----------------Practice Exercise 5.5--------------</h2>")

let gridArr = [];
let totalCells = 64;
let counter1 = 0;

for (let i = 0; i < totalCells; i++) {
    if (i % 8 === 0) {
        gridArr.push([]);
        counter1++;
    }
    gridArr[counter1 - 1].push(i);
}
console.log(gridArr);


// ----------------- Practice Exercise 5.6 ---------------------------
// document.write("<h2>----------------Practice Exercise 5.6--------------</h2>")

let arr1 = [];

for(let i= 0; i < 10; i++){
    arr1.push(i);
}
 console.log(arr1);

for(let j = 0; j <arr1.length; j++){
    console.log(arr1[j]);
}

for(const value of arr1){
    console.log(value);
}


// ----------------- Practice Exercise 5.7 ---------------------------
// document.write("<h2>----------------Practice Exercise 5.7--------------</h2>")

let student ={
    name : "Saba",
    rollNo : 101,
    isPass : true
}
for(let key in student){
    console.log(`Key : ${key} , Value: ${student[key]}`);
}

let stdArr = ["Saba", 101, true];
for(let el in stdArr){
    console.log(stdArr[el]);
}


// ----------------- Practice Exercise 5.8 ---------------------------
// document.write("<h2>----------------Practice Exercise 5.8--------------</h2>")

let output = ""; 
let skipNum = 5;

for(let i = 1; i <= 10; i++){
    if(i === skipNum){
        continue;
    }
    console.log(output);
}
for(let i = 1; i <= 10; i++){
    if(i === skipNum){
        break;
    }
    console.log(output);
}

