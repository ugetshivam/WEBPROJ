function myFunction() {
    var reg = /[0-9A-Za-z]/;
    var s = document.getElementById("pass").value;

    if (reg.test(s))
        alert("Strong Password!");
    else
        alert("Weak Password.");
}