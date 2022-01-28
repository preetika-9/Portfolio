

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


var options = {
    strings: ["Developer.", "Blogger.", "Designer.", "Freelancer."],
    typeSpeed: 40,
    backSpeed: 60,
    loop: true
};

var typed = new Typed('.typing', options);


var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    }else{
        mybutton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

