// Initialize cart array
let cart = [];

// Function to add items to the cart
function addToCart(id, name, price) {
    let product = { id, name, price };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} has been added to your cart.`);
}

// Load cart from local storage
function loadCart() {
    let savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = savedCart;
    displayCart();
}

// Display cart content on the cart page
function displayCart() {
    let cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    cart.forEach((product, index) => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    let total = cart.reduce((sum, item) => sum + item.price, 0);
    cartContainer.innerHTML += `<h3>Total: ₹${total}</h3>`;
}

// Function to remove items from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Call loadCart when the cart page loads
if (window.location.pathname.endsWith('cart.html')) {
    loadCart();
}
