let product = {}
let quantity = 1
let addedToCart = false
const BASE_URL = 'https://fakestoreapi.com/products'

const productId = new URLSearchParams(window.location.search).get('id')
const productContainer = document.getElementById('product')
const loadingElement = document.getElementById('loading')

function increaseQuantity() {
    quantity++
    document.querySelector('#quantity').textContent = quantity
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--
        document.querySelector('#quantity').textContent = quantity
    }
}

// function addToCart to save the product in the localStorage
function addToCart() {
    addProductToCart(product, quantity);
    addedToCart = true;
    showAddToCartNotification(product.title);
}

async function fetchProduct() {
    showLoading()
    await fetch(`${BASE_URL}/${productId}`)
    .then(response => response.json())
    .then(data => product = data)
    hideLoading()

    productContainer.innerHTML = `
        <div class="product-details">
            <img src="${product.image}" alt="${product.title}" class="product-info-image">
            <div class="product-info">
                <div class="product-rating">
                    ${Array.from({ length: product.rating.rate }, (_, index) => index + 1 ).map(() => `
                        <img src="assets/star.svg" alt="Star" class="product-rating-star" >
                    `).join('')}
                    <span class="product-rating-rate">${product.rating.rate}</span>
                    <span class="product-rating-count">(${product.rating.count}) votos</span>
                </div>
                <p class="product-category">${product.category}</p>
                <h2>${product.title}</h2>
                <p class="product-price">S/.${product.price}</p>
                <p>${product.description}</p>
                <div class="product-actions">
                    <div class="product-quantity">
                        <button onclick="decreaseQuantity()" type="button" class="quantity-btn">-</button>
                        <span id="quantity">${quantity}</span>
                        <button onclick="increaseQuantity()" type="button" class="quantity-btn">+</button>
                    </div>
                    <button onclick="addToCart()" class="product-add" type="button">Agregar al carrito</button>
                </div>
            </div>
        </div>
    `
}

// Inicializar peticion
fetchProduct()
updateCartCount()