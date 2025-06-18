const cache = localStorage.getItem("username");
let welcome = document.getElementById("content");
welcome.innerHTML = `<h3>Logged In Successfully</h3> Welcome, ${cache}`;