const cache = localStorage.getItem("username");
let welcome = document.getElementById("content");
welcome.innerHTML = `<h2>Logged In Successfully <br> Welcome, ${cache}</h2>`;