function add() { //Addition function with a button
    var addition = 5 + 6;
    document.getElementById("add").innerHTML = "5 + 6 = " + addition;
}

function subtract() { //Subtraction function with a button
    var subtraction = 9 - 3;
    document.getElementById("subtract").innerHTML = "9 - 3 = " + subtraction;
}

function multiply() { //Multiplication function with a button
    var multiplication = 4 * 8;
    document.getElementById("multiply").innerHTML = "4 * 8 = " + multiplication;
}

function divide() {  //Division function with a button
    var division = 6 / 2;
    document.getElementById("divide").innerHTML = "6 / 2 = " + division;
}

function multi_math() {  //Multiple math methods in the same function
    var multi_math = (2 + 4) * 6 / 2 - 9;
    document.getElementById("multi").innerHTML = "2 plus 4 times 6 divided by 2 minus 9 is " + multi_math;
}

function modulus_operator() { //Modulus, showing the remainder after dividing 38 by 7
    var modulus = 38 % 7;
    document.getElementById("modulus").innerHTML = "When you divide 38 by 7, you get a remainder of " + modulus;
}

function negation_operator() { //Makes the variable negative
    var negative = 6
    document.getElementById("negation").innerHTML = -negative;
}

var X = 4.9; //Add 1
X++;
document.write(X);
Math.round(X)   //////////Math object function, rounding to the nearest integer.

var Y = 3541; //Subtract 1
Y--;
document.write(Y);

window.alert(Math.random()); //Random number between 0 and 1

window.alert(Math.random() * 100); //Random number between 0 and 100