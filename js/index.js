function validateForm(){
    let x = document.forms["myForm"]["name"].value;
    if(x == ""  || x == null){
        alert("Name must be filled.");
        return false;
    }

    let y = document.forms["myForm"]["subject"].value;
    if(y == null || y == ""){
        alert("Subject must be filled.");
        return false;
    }

    let z = document.forms["myForm"]["email"].value;
    if(z == null || z == ""){
        alert("Email must be filled.");
        return false;
    }
}