function load(url, xfunc) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {xfunc(this);}
    xhttp.open("GET", url);
    xhttp.send();
}
function ajax(xhttp) {
    document.getElementById("ajax").innerHTML = xhttp.responseText;
}