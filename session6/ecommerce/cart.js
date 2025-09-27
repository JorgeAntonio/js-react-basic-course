const cartContainer = document.getElementById('cart')
const loadingElement = document.getElementById('loading')

let cart = []

// Funcion para cargar el carrito desde localstorage
function loadCart() {
    cart = getCart()
    // mostrar la UI del carrito
    renderCart()
    updateCartCount()
}

// Funcion para guardar el carrito en localstorage
function saveCart() {
    saveCartToLocalstorage(cart)
}

// Funcion para renderizar el carrito
function renderCart() {
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="cart-empty">
                <h2>Tu carrito está vacío</h2>
                <p>!Agrega algunos productos a tu carrito!</p>
                <a href="index.html" class="continue-shopping">
                    Continuar comprando
                </a>
            </div>
        `
        loadingElement.style.display = "none"
        return
    }

    loadingElement.style.display = "none"

    const cartHTML = `
        <div class="cart-header">
            <h1>Carrito de compras</h1>
            <span class="cart-count">${getTotalItemsLocal()} productos</span>
        </div>

        <div class="cart-content">
            <div class="cart-items">
                ${cart.map(item => `
                   <div class="cart-item" data-id="${item.id}">
                        <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                        <section class="cart-item-details">
                            <h3 class="cart-item-title">${item.title}</h3>
                            <p class="cart-item-category">${item.category}</p>
                            <p class="cart-item-price">s/.${item.price}</p>
                        </section>
                        <section class=cart-item-actions>
                            <div class="cart-item-quantity">
                                <button onclick="decreaseQuantity(${item.id})" class="quantity-btn">-</button>
                                <span class="quantity">${item.quantity}</span>
                                <button onclick="increaseQuantity(${item.id})" class="quantity-btn">+</button>
                            </div>
                            <p class="cart-item-subtotal">s/.${(item.price * item.quantity).toFixed(2)}</p>
                            <button class="remove-btn" onclick="removeFromCart(${item.id})">
                                <img src="assets/trash-2.svg" alt="Eliminar" class="remove-icon" >
                            </button>
                        </section>
                   </div>
                `).join('')}
            </div>
            <div class="cart-summary">
                <div class="summary-content">
                    <h2>Resumen del pedido</h2>
                    <section class="summary-line">
                        <span>Subtotal (${getTotalItemsLocal()} productos):</span>
                        <span>s/.${getSubtotal().toFixed(2)}</span>
                    </section>
                    <section class="summary-line">
                        <span>Envio:</span>
                        <span>Gratis</span>
                    </section>
                    <section class="summary-line total">
                        <span>Total:</span>
                        <span>s/.${getTotal().toFixed(2)}</span>
                    </section>
                    <button class="checkout-btn" onclick="checkout()">
                        Proceder al pago
                    </button>
                    <a href="index.html" class="continue-shopping">Continuar comprando</a>
                </div>                    
            </div>


        </div>
    `

    cartContainer.innerHTML = cartHTML
}

// Función para proceder al checkout
function checkout() {
    if (cart.length === 0) {
        alert("Tu carrito esta vacío")
        return
    }

    // Aquí puedes implementar la lógica de checkout
    alert(`Total a pagar: S/.${getTotal().toFixed(2)}\n¡Gracias por su compra!`)
    // Limpiar el carrito después del checkout
    cart = []
    saveCart()
    renderCart()
}

function getTotal() {
    return getSubtotal()
}

function getSubtotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
}

function getTotalItemsLocal() {
    return cart.reduce((total, item) => total + item.quantity, 0)
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId)
    saveCart()
    renderCart()
}

function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId)
    if (item && item.quantity > 1) {
        item.quantity--
        saveCart()
        renderCart()
    }
}

function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId)
    if (item) {
        item.quantity++
        saveCart()
        renderCart()
    }
}


// Cargar el carrito al inicializar la pagina
document.addEventListener("DOMContentLoaded", function () {
    loadCart()
    updateCartCount()
})



