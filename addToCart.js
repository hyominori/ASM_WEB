function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-container");
    const subtotalElement = document.getElementById("subtotal");
    const totalElement = document.getElementById("total");

    cartContainer.innerHTML = ""; // Xóa nội dung cũ
    let subtotal = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(product => {
            subtotal += product.price * product.quantity;

            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";
            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${product.id}, -1)">-</button>
                        <span>${product.quantity}</span>
                        <button onclick="updateQuantity(${product.id}, 1)">+</button>
                    </div>
                    <button class="remove-from-cart-btn" onclick="removeFromCart(${product.id})">Remove</button>
                </div>
            `;
            cartContainer.appendChild(cartItem);
        });
    }

    const shipping = subtotal > 0 ? 0 : 0;
    const total = subtotal + shipping;

    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

function updateQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = cart.find(item => item.id === productId);

    if (product) {
        product.quantity += change;

        if (product.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart(); 
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function clearCart() {
    localStorage.removeItem("cart");
    renderCart(); 
}

window.onload = renderCart;