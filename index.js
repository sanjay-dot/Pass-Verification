function verifyPassword(){
    var pwd = document.getElementById("pswd").value;
    var mobile  = document.getElementById("mob").value;


    if(pwd == ""){
        document.getElementById('message').innerHTML = "No spaces are allowed";
        return false;
    }

     if(pwd.length < 8) {
        document.getElementById("message").innerHTML = "Minimum 8 characters required";
        return false;
    }

    if(pwd.length >20){
        document.getElementById("message").innerHTML = "  Password is too long";
        return false;
    }

    if(pwd.search(/[0-9]/)==-1){
        document.getElementById("message").innerHTML = " Nees atleast 1 numberic value";
        return false;
    }
    
    if(pwd.search(/[A-Z]/)==-1){
        document.getElementById("message").innerHTML = " Need atleast one Upper case letter";
        return false;
    }

    else{
        document.getElementById("message").innerHTML = " ";    
    }

    if(mobile == ""){
        document.getElementById("message2").innerHTML = "Enter number"
        return false;
    }

    if(isNaN(mobile))
    {
        document.getElementById('message2').innerHTML = "Please enter numbers";
        return false;
    }

    if(mobile > 10){
        document.getElementById('message2').innerHTML = "Enter valid number"
    }

    else{
        alert("You are logged In");
    }
}