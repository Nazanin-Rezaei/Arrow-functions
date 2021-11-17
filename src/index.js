import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// var numbers = [3, 56, 2, 48, 5];

// function square(x){
// return x*x;
// }

// const newNumber=numbers.map(x => x*x);

// console.log(newNumber);

// //Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

////Filter - Create a new array by keeping the items that return true.
// const newNumber = numbers.filter((x) => x < 10);

// console.log(newNumber);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(
//   (accumulator, currentNumber) => accumulator + currentNumber
// );
// console.log(newNumber);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find((num) => num > 10)
// console.log(newNumber);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex((num) => num > 10);
// console.log(newNumber);
