function checkpswd() {
    var pswd = document.getElementById("p").ariaValueMax;
    var pattern = /^[a-z0-9]+$/;

    if (password.match(pattern)) {
        alert("Password is Valid");
    } else {
        alert("Password is Invalid")
    }
}