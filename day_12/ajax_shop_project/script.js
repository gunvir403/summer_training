async function recieveData() {
    const url = "https://dummyjson.com/products?limit=20";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
        }
        const json = await response.json();

        document.getElementById("loading").style.display = "none";
        document.getElementById("products").style.display = "flex";

        renderShop(json);
        }
    catch (error) {
        console.error(error.message);
    }
    
    function renderShop(json) {
        for (let i = 0; i<=json.products.length; i++) {
            const container = document.getElementById("products");
            const card = document.createElement('div');
            card.classList.add("card");
            const img = document.createElement('img');
            img.src = json.products[i].thumbnail;
            const name = document.createElement('h4');
            name.textContent = json.products[i].title;
            const price = document.createElement('h3');
            price.textContent = "$" + json.products[i].price;
            const stock = document.createElement('h4');
            stock.textContent = json.products[i].availabilityStatus;
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(price);
            card.appendChild(stock);
            container.appendChild(card);

            const details = document.createElement('div');
            details.classList.add('details');
            details.innerHTML = `<img src="${json.products[i].images[0]}" width="300px" height="300px">
                                 <h4>${json.products[i].title}</h4>
                                 <h3>$${json.products[i].price}</h3>
                                 <p>${json.products[i].description}</p>
                                 <h4 style="color: red;">Click Anywhere on this banner to close it.</h4>`;
            container.appendChild(details);

            card.addEventListener("click", () => {
                details.style.display = "flex";
            });

            details.addEventListener("click", () => {
                details.style.display = "none";
            });
    }
    }
}
document.addEventListener("DOMContentLoaded",recieveData);