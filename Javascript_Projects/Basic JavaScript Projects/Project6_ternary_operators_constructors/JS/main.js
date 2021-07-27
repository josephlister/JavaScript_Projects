function Ride_Function() { //ternary operator example
    var Height, Can_ride;
    Height = document.getElementById("Height").nodeValue;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_function() { // ternary operator
    var Age, Can_vote;
    Age = document.getElementById("Age").nodeValue;
    Can_vote = (Age > 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) { // Object Constructor
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model +
    " manufactured in " + Jack.Vehicle_Year;
}

function Nested() { // Nested Function
    document.getElementById("Nested_function").innerHTML = Count();
    function Count() {
        var Starting_point = 6;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}