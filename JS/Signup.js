function myFunction() {
    var passkey = document.getElementById("pass").value;
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (passkey != "") {
        if (passkey.match(paswd)) {
            document.getElementById("PASS_WORD").innerHTML = "Strong Password";
            document.getElementById("PASS_WORD").style.color = "green";

        }
        else {
            document.getElementById("PASS_WORD").innerHTML = "Weak Password.";
            document.getElementById("PASS_WORD").style.color = "red";
        }
    }
}