// Prevent the form from reloading the page
document.getElementById("signupInfo").addEventListener("click", function(event) {event.preventDefault()});

function verifyDetails() {
    let email = document.getElementById("email").value;
    let uname = document.getElementById("uname").value;
    localStorage.setItem("username", uname);
    let pass = document.getElementById("pass").value;
    let pass2 = document.getElementById("pass2").value;
    
    let error1 = document.getElementById("error1");
    let error2 = document.getElementById("error2");
    let error3 = document.getElementById("error3");
    let error4 = document.getElementById("error4");

    error1.innerHTML = "";
    error2.innerHTML = "";
    error3.innerHTML = "";
    error4.innerHTML = "";

    // Check Email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailRegex)) {
        error1.innerHTML = "E-Mail Address is Invalid";
    }

    // Check Username
    const unameRegex = /^[0-9a-z._-]{3,10}$/;
    if (!uname.match(unameRegex)) {
        error2.innerHTML =  `Username is invalid`;
    }

    // Check Password
    const passRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    if (!pass.match(passRegex)) {
        error3.innerHTML =   `Password is invalid`;
    }

    // Confirm Password
    if (pass!==pass2) {
        error4.innerHTML = "Passwords do not match";
    }

    // Check all conditions then login
    if (email.match(emailRegex) && uname.match(unameRegex) && pass.match(passRegex) && pass==pass2) {
        window.location.href = "home.html";
        return true;
    }
}