function My_dictionary() {
    var Animal = {
        species:"dog",
        Nickname:"Chewy",
        age:6,
        color:"brown"
    };
    delete Animal.nickname; // Utilizing the delete operator
document.getElementById("dictionary").innerHTML = Animal.Nickname;
}