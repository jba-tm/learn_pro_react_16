console.log("Hello, world")
console.log("Hello, world")
console.log("Hello, world")
console.log("Hello, world")

const myFunc1 = function () {
    console.log("This statement is inside the function");
};
console.log("This statement is outside the function");
myFunc1();

function myFunc2(name, weather) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
}

myFunc2("Adam", "sunny");

function rest(name, weather, ...extraArgs) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
    for (let i = 0; i < extraArgs.length; i++) {
        console.log("Extra Arg: " + extraArgs[i]);
    }
}

rest("Adam", "sunny", "one", "two", "three");


function returnRest(name) {
    return ("Hello " + name + ".");
}

console.log(returnRest("Adam"));

function myFunc(nameFunction) {
    return ("Hello " + nameFunction() + ".");
}

console.log(myFunc(function () {
    return "Adam";
}));

const myFunc = (nameFunction) => ("Hello " + nameFunction() + ".");
const printName = (nameFunction, printFunction) =>
    printFunction(myFunc(nameFunction));
printName(function () {
    return "Adam"
}, console.log);

function messageFunction(name, weather) {
    let message = "Hello, Adam";
    if (weather === "sunny") {
        let message = "It is a nice day";
        console.log(message);
    } else {
        let message = "It is " + weather + " today";
        console.log(message);
    }
    console.log(message);
}

messageFunction("Adam", "raining");

function myFunc(name) {
    let myLocalVar = "sunny";
    let innerFunction = function () {
        return ("Hello " + name + ". Today is " + myLocalVar + ".");
    }
    return innerFunction();
}

console.log(myFunc("Adam"));

let firstBool = true;
let secondBool = false;

function messageFunction(weather) {
    let message = `It is ${weather} today`;
    console.log(message);
}

messageFunction("raining");

let name = "Adam";
if (name === "Adam") {
    console.log("Name is Adam");
} else if (name === "Jacqui") {
    console.log("Name is Jacqui");
} else {
    console.log("Name is neither Adam or Jacqui");
}
switch (name) {
    case "Adam":
        console.log("Name is Adam");
        break;
    case "Jacqui":
        console.log("Name is Jacqui");
        break;
    default:
        console.log("Name is neither Adam or Jacqui");
        break;
}

let firstVal = 5;
let secondVal = "5";
if (firstVal == secondVal) {
    console.log("They are the same");
} else {
    console.log("They are NOT the same");
}

let firstVal = 5;
let secondVal = "5";
if (firstVal === secondVal) {
    console.log("They are the same");
} else {
    console.log("They are NOT the same");
}

let myArray = new Array();
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;

let myArray = [100, "Adam", true];
console.log(`Index 0: ${myArray[0]}`)

let myArray = [100, "Adam", true];
myArray[0] = "Tuesday";
console.log(`Index 0: ${myArray[0]}`);

let myArray = [100, "Adam", true];
for (let i = 0; i < myArray.length; i++) {
    console.log(`Index ${i}: ${myArray[i]}`);
}
console.log("---");
myArray.forEach((value, index) => console.log(`Index ${index}: ${value}`));

import { asyncAdd } from "./async";
let values = [10, 20, 30, 40, 50];
let total = asyncAdd(values);
console.log(`Main Total: ${total}`);