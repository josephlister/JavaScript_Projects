document.write(typeof "string")

document.write("13" + 6) //Example of type coercion

// ---- NaN Section ---- //
function My_function_false() {
    document.getElementById("test").innerHTML = isNaN("Joseph");
}

function My_function_true() {
    document.getElementById("test").innerHTML = isNaN("1988");
}