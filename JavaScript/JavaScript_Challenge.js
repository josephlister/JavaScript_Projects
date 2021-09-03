function validateForm() { // Form validation function if input is blank.
    let x = document.forms["myForm"]["firstname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    let y = document.forms["myForm"]["phonenumber"].value;
    if (y == "") {
        alert("Phone number must be filled out");
        return false;
    }
}

function openForm() {
    document.getElementById("popForm").style.display = "block";
}
  
  function closeForm() {
    document.getElementById("popForm").style.display = "none";
}

