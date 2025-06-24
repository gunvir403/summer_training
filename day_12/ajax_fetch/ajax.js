async function loadAJAX() {
    const url = "info.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        const container = document.getElementById("leContainer");
        const jsonElement = document.createElement('p');
        jsonElement.innerHTML = `<p>First Name: ${json.firstname}</p><p>Last Name: ${json.lastname}</p>`;
        container.appendChild(jsonElement);
    } 
    catch (error) {
        alert(error.message);
  }
}
