// Global Variable //
X = 3
function Multiply_1() {
    document.write(13 * X + "<br>");
}
function Multiply_2() {
    document.write(X * 8 + "<br>");
}
Multiply_1();
Multiply_2();

// Local Variable //
function Multiply_3() {
    var W = 3;
    document.write(W * 2 + "<br>");
}
function Multiply_4() { // Error because W is not defined in this function.
    document.write(W * 7);
}
Multiply_3();
Multiply_4();

// If Statement //
function get_date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
if (6 > 3) {
    document.write("The first number is greater than the second")
}

// Else Statement //
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote."
    }
    else {
        Vote = "You are not old enough to vote."
    }
    document.getElementById("How_old_are_you").innerHTML = Vote;
}

// Else If Statement //
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}