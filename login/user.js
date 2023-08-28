function checkUser() {
    console.log('1')
    var UserName = document.getElementById("firstname").value
    var userPattern = /^(?=.*[A-Z]).*$/
    var flagU = true;
    console.log(UserName)
    if (UserName.match(userPattern)) {
        // alert("Your UserName is valid")
        console.log("te")
    } else {
        flagU = flase;
        alert("UserName should start in capital letters");
    }
    return flagU
}


function checkpswd() {
    var flagP = true;
    var pswd = document.getElementById("password").ariaValueMax;
    var pattern = /^[a-z0-9]+$/;

    if (pswd.match(pattern)) {
        console.log('6')
        // alert("Password is Valid");
    } else {
        flagP = flase;
        alert("Password is Invalid");
    }
    return flagP
}

