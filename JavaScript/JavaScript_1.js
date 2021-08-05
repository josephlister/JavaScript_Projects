function Color_function() {
    var Color_Output;
    var Colors = document.getElementById("Color_input").value;
    var Color_string = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_string;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_string;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_string;
        break;
        case "Green":
            Color_Output = "Green" + Color_string;
        break;
        case "Orange":
            Color_Output = "Orange" + Color_string;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_string;
        break;
        default:
            Color_Output = "Please enter a color as written on the list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

// getElementsByClassName Method //
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed.";
}

// Canvas Method/Gradient Fill //
var c = document.getElementById("ID_name");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 500, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);