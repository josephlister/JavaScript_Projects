// ---- Loop Function ---- //
function Call_loop() {
    var Digit = "";
    var X = 8;
    while (X < 16) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("loop").innerHTML = Digit;
}

// ---- Length Function ---- //
function Length_function() {
    let Str = "We are going to find out the length of this string."; //Let keyword
    document.getElementById("length").innerHTML = Str.length;;
}

// ---- For Loop ---- //
var Instruments = ["guitar", "bass", "drums", "keyboard", "synthesizer"];
var Content = "";
var Y;
function For_loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}

// Array document.getElementById Function //
function Array_function() {
    var Color = [];
    Color[1] = "yellow";
    Color[2] = "green";
    Color[3] = "turquoise";
    Color[4] = "black";
    document.getElementById("Array").innerHTML = "The jewelry is " + Color[3] + ".";
}

// Constant Function //
function Constant_function() {
    const Plant = {family:"succulent", type:"aloe", color:"green"};
    Plant.color = "dark green";
    Plant.price = "$12";
    document.getElementById("constant").innerHTML = "The cost of the " + Plant.color + " " +
    Plant.type + " is " + Plant.price + ".";
}

// Object/Let/Return //
function Object_function() {
    let dog = {
        breed: "Australian shepherd ",
        color: "brown ",
        age: "6 year old ",
        name: "Chewy",
        description : function() {
            return "The dog is  a " + this.age + this.color + this.breed + "named " + this.name + ".";
        }
    };
    document.getElementById("dog_object").innerHTML = dog.description();
}

// Break Statement //
function Break_function() {
    let text = "";
    for (let i=0; i < 10; i++) {
        if (i === 6) {break; }
        text += "Number " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}

// Continue Statement //
function Continue_function() {
    let text = "";
    for (let i=0; i < 10; i++) {
        if (i === 2) {continue; }
        text += "Number " + i + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}