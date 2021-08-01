function Full_Name() { //Concat Method
    var Part_1 = "Joseph ";
    var Part_2 = "Phillip ";
    var Part_3 = "Lister ";
    var Part_4 = "Junior";
    var whole_name = Part_1.concat(Part_2, Part_3, Part_4);
    document.getElementById("Concatenate").innerHTML = whole_name;
}

function Slice_function() { //Slice Method
    var Sentence = "I know it's only rock and roll, but I like it.";
    var Rock = Sentence.slice(17, 30);
    document.getElementById("slice").innerHTML = Rock;
}

 function Upper_Method() { //Uppercase Method
    var String = "Dont give up on your dreams.";
    var Ref = String.toUpperCase();
    document.getElementById("upper").innerHTML = Ref;
 }

 function Search_Method() { //Search Method
     var String = "This is a string.";
     var Number = String.search("string");
     document.getElementById("search").innerHTML = Number;
 }

 function Number_to_string() { //Number to String Method
     var Q = 1764;
     document.getElementById("string").innerHTML = Q.toString();
 }

 function Precision_method() { //To Precision Method
     var Z = 189.28389482723749;
     document.getElementById("precise").innerHTML = Z.toPrecision(8);
 }

 function Rounded() { //To Fixed Method
    var T = 43.748373;
    document.getElementById("rounded").innerHTML = T.toFixed(2);
 }

 function Value() {
     var Str = "Valueof returns primitive form.";
     document.getElementById("primitive").innerHTML = Str.valueOf();
 }
 