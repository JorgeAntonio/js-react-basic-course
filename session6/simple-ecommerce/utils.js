const loadingElement = document.getElementById('loading')
const cartCountElement = document.getElementById('cart-count')


function showLoading() {
    if (loadingElement) {
        loadingElement.style.display = 'block'
    }
}

function hideLoading() {
    if (loadingElement) {
        loadingElement.style.display = 'none'
    }
}

function showAddToCartNotification(productTitle) {
    alert(`${productTitle} agregado al carrito`)
}

// Funcion para obtener el total de productos en el carrito
function getTotalItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    return cart.reduce((total, item) => total + item.quantity, 0)
}

// Funcion para actualizar el contador del carrito
function updateCartCount() {
    if (cartCountElement) {
        cartCountElement.textContent = getTotalItems()
    }
}

// Funcion para obtener el carrito desde localstorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || []
}

// Funcion para guardar un producto en localstorage
function saveCartToLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCartCount()
}

// Funcion para agregar un producto al carrito
function addProductToCart(product, quantity = 1) {
    const cart = getCart()
    const productInCart = cart.find(item => item.id === product.id)

    if (productInCart) {
        productInCart.quantity =+ quantity
    } else {
        cart.push({...product, quantity})
    }

    saveCartToLocalStorage(cart)
    return cart
}

