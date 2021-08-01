document.write(typeof "string")

document.write("13" + 6) //Example of type coercion

// ---- NaN Section ---- //
function My_function_false() {
    document.getElementById("test").innerHTML = isNaN("Joseph");
}

function My_function_true() {
    document.getElementById("test").innerHTML = isNaN("1988");
}
// ---- /NaN Section ---- //

document.write(2E309) //Example of positive infinity

document.write(-2E309) //Example of negative infinity

// ---- Boolean Logic Section ---- //

document.write(5 > 1);

document.write(5 > 7)

// ---- /Boolean Logic Section ---- //

console.log(5 + 8); // Will display answer in console (ctrl + shift + I)

console.log(6 > 8); // Will display false in console

document.write(6 == 6); //Double equal compares the two

document.write(9 == 1);

E = 5;
R = 5;
document.write(E === R); // Triple equal compares data type and value

T = 12;
Y = 13;
document.write(T === Y); // Different values

U = "13";
document.write(Y === U); // Different data types

document.write(E === U); // Different data types and values

// ---- And + Or Operators ---- //

document.write(15 > 4 && 13 > 3);

document.write(15 > 3 && 1 > 4);

document.write(15 > 2 || 1 > 15);

document.write(15 < 3 || 14 < 13);

// ---- Not Operator ---- //

function not_function_1() {
    document.getElementById("not_true").innerHTML = !(12 < 2);
}

function not_function_2() {
    document.getElementById("not_false").innerHTML = !(13 > 11);
}