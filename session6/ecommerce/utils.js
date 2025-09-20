// Funcion para obtener el total de productos en el carrito
function getTotalItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    return cart.reduce((total, item) => total + item.quantity, 0)
}

// Funcion para actualizar el contador del carrito en el header
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count')
    if (cartCountElement){
        cartCountElement.textContent = getTotalItems()
    }
}

// Funcion para obtener el carrito desde localstorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || []
}

// Funcion para guardar el carrito en localstorage
function saveCartToLocalstorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCartCount()
}

// Funcion para agregar un producto al carrito en localstorage
function addProductToCart(product, quantity = 1) {
    const cart = getCart()
    const productInCart = cart.find(item => item.id === product.id)

    if (productInCart) {
        productInCart.quantity += quantity
    } else {
        cart.push({ ...product, quantity})
    }

    saveCartToLocalstorage(cart)
    return cart
}

function showAddToCartNotification(productTitle) {
    alert(`${productTitle} agregado al carrito`)
}

// Funcion para mostrar el loading
function showLoading() {
    const loadingElement = document.getElementById('loading')
    if (loadingElement) {
        loadingElement.style.display = 'block'
    }
}

// Funcion para ocultar el loading
function hideLoading() {
    const loadingElement = document.getElementById('loading')
    if (loadingElement) {
        loadingElement.style.display = 'none'
    }
}
