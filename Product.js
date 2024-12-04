const products = {
    rings: [
        { id: 1, name: "Nhẫn kim cương NKC1608", price: 1500, image: "Image/Nhan1.webp" },
        { id: 2, name: "Nhẫn kim cương NKC1201", price: 1000, image: "Image/Nhan2.webp" },
        { id: 3, name: "Nhẫn kim cương NKC9916", price: 2000, image: "Image/Nhan3.webp" },
        { id: 4, name: "Nhẫn kim cương Custom Pear Cut NKC8302", price: 1800, image: "Image/Nhan4.webp" },
        { id: 5, name: "Nhẫn kim cương NKC8210", price: 1600, image: "Image/Nhan5.webp" },
        { id: 16, name: "Nhẫn cầu hôn Belle Ame NCH1616", price: 3000, image: "Image/Nhan6.webp"},
        { id: 17, name: "Nhẫn cầu hôn Yours Forever NCH8414", price: 1000, image: "Image/Nhan7.webp"},
        { id: 18, name: "Nhẫn cầu hôn Lavish Veil NCH1028", price: 950, image: "Image/Nhan8.webp"}
    ],
    necklaces: [
        { id: 6, name: "Mặt dây chuyền MDA8111", price: 2000, image: "Image/VongCo1.webp" },
        { id: 7, name: "Mặt dây chuyền MDA2118", price: 2500, image: "Image/VongCo2.webp" },
        { id: 8, name: "Mặt dây chuyền MDA2110", price: 1500, image: "Image/VongCo3.webp" },
        { id: 9, name: "Mặt dây chuyền Tender Heart MDA8149", price: 1500, image: "Image/VongCo4.webp" },
        { id: 10, name: "Mặt dây chuyền Dazzling Heart MDA8150", price: 1700, image: "Image/VongCo5.webp" },
        { id: 19, name: "Mặt dây chuyền MDA0015", price: 1000, image: "Image/VongCo6.webp" },
        { id: 20, name: "Mặt dây chuyền Sweet Cherry MDA0016", price: 1200, image: "Image/VongCo7.webp" },
        { id: 21, name: "Mặt dây chuyền MDA1101", price: 1400, image: "Image/VongCo8.webp" }
    ],
    bracelets: [
        { id: 11, name: "Vòng tay VTA1116", price: 3000, image: "Image/Vong1.webp" },
        { id: 12, name: "Vòng tay VTA1114", price: 2500, image: "Image/Vong2.webp" },
        { id: 13, name: "Vòng tay VTA3101", price: 4000, image: "Image/Vong3.webp" },
        { id: 14, name: "Vòng tay VTA8111", price: 5000, image: "Image/Vong4.webp" },
        { id: 15, name: "Vòng tay VTA1201", price: 4500, image: "Image/Vong5.webp" },
        { id: 22, name: "Vòng tay VTA8103", price: 2000, image: "Image/Vong6.webp" },
        { id: 23, name: "Vòng tay VTA1110", price: 4200, image: "Image/Vong7.webp" },
        { id: 24, name: "Vòng tay VTA8104", price: 4500, image: "Image/Vong8.webp" }
    ]
};

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

const categoryTitle = document.getElementById("category-title");
if (category && products[category]) {
    categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
} else {
    categoryTitle.textContent = "All Products";
}

function renderProducts(category) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";
    
    const categoryProducts = category && products[category] ? products[category] : Object.values(products).flat();

    categoryProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
}

function addToCart(productId) {
    const product = Object.values(products).flat().find(p => p.id === productId);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to your cart!`);
}


function sortProducts() {
    const sortBy = document.getElementById("sort-by-price").value;
    let categoryProducts = category && products[category] ? products[category] : Object.values(products).flat();

    if (sortBy === "asc") {
        categoryProducts.sort((a, b) => a.price - b.price); // Tăng dần
    } else if (sortBy === "desc") {
        categoryProducts.sort((a, b) => b.price - a.price); // Giảm dần
    }

    renderProducts(category);
}

document.getElementById("sort-by-price").addEventListener("change", sortProducts);

renderProducts(category);
