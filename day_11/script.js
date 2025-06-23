const cardData = [
    {   original: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e1a8971ee7c40fa8ab5b4826450a048_9366/Samba_OG_Shoes_Burgundy_ID0477_01_standard.jpg", 
        hover: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d4755239d1ab4fc28017ec9c0685b84b_9366/Samba_OG_Shoes_Burgundy_ID0477_02_standard_hover.jpg",
        price: "$10 999.00",
        name: "Samba OG Shoes",
        desc1: "Women originals",
        desc2: "2 colours",
        desc3: "New" },
    {   original: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_White_B75806_01_00_standard.jpg", 
        hover: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/ec595635a2994adea094a8bf0117ef1a_9366/Samba_OG_Shoes_White_B75806_02_standard.jpg",
        price: "$10 999.00",
        name: "Samba OG Shoes",
        desc1: "originals",
        desc2: "4 colours",
        desc3: "Never out of style" },
    {   original: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/011744ef273d4a66b9cc880b980340a2_9366/Samba_OG_Shoes_White_ID0478_01_standard.jpg", 
        hover: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e4e5659437ab4914a9a900f190717b48_9366/Samba_OG_Shoes_White_ID0478_02_standard_hover.jpg",
        price: "$10 999.00",
        name: "Samba OG Shoes",
        desc1: "originals",
        desc2: "2 colours",
        desc3: "" },
    {   original: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/a34f007a106043afb2f3afab00e997ee_9366/Samba_OG_Shoes_White_IG1024_01_standard.jpg", 
        hover: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/aa8968648a604bb3971dafab00e9b6ec_9366/Samba_OG_Shoes_White_IG1024_02_standard_hover_hover_hover_hover_hover.jpg",
        price: "$10 999.00",
        name: "Samba OG Shoes",
        desc1: "originals",
        desc2: "4 colours",
        desc3: "New"}
];
const cardContainer = document.getElementById('mainProducts');
cardData.map((cardElement) => {
    const card = document.createElement('div');
    card.classList.add('card');
    const img = document.createElement('img');
    img.src = cardElement.original;
    const txt1 = document.createElement('h4');
    txt1.textContent = cardElement.price;
    const txt2 = document.createElement('h5');
    txt2.textContent = cardElement.name;
    const txt3 = document.createElement('h6');
    txt3.textContent = cardElement.desc1;
    const txt4 = document.createElement('h6');
    txt4.textContent = cardElement.desc2;
    const txt5 = document.createElement('h5');
    txt5.textContent = cardElement.desc3;
    card.addEventListener('mouseenter', () => {
        img.src = cardElement.hover;
        card.style.border = "1px solid black";
    });
    card.addEventListener('mouseleave', () => {
        img.src = cardElement.original;
        card.style.border = "none";
    });
    card.appendChild(img);
    card.appendChild(txt1);
    card.appendChild(txt2);
    card.appendChild(txt3);
    card.appendChild(txt4);
    card.appendChild(txt5);
    cardContainer.appendChild(card);
});
const dropDown = document.querySelector("#centerSpace h4");
const dropMenu = document.getElementById("dropdownMenu");
dropDown.addEventListener('mouseenter', () => {
    dropMenu.style.display = "flex";
});
dropMenu.addEventListener('mouseleave', () => {
    dropMenu.style.display = "none";
});