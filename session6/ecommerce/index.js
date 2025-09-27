// API URL
const BASE_URL = 'https://fakestoreapi.com/products'

const productContainer = document.getElementById('products')
const loadingElement = document.getElementById('loading')

// Lista de productos
let products = []

async function fetchProducts() {
    const response = await fetch(`${BASE_URL}`)
    .then(response => response.json())
    .then(data => products = data)

    
    showLoading()
    response.forEach(product => {
        const productElement = document.createElement('div')
        productElement.classList.add('product')
        productElement.innerHTML = `
            <div class="product">
                <a href="details.html?id=${product.id}">
                    <img class="product-image" src="${product.image}" alt="${product.title}">
                    <h2 class="product-title">${product.title}</h2>
                </a>
                <p class="product-price">S/.${product.price}</p>
                <button class="product-add" onclick="addToCart(${product.id})" type="button">
                    Agregar al carrito
                </button>
            </div>        
        `
        productContainer.appendChild(productElement)
    });
    hideLoading()
}

// Inicializamos la peticion
fetchProducts()

function addToCart(productId) {
    const product = products.find(p => p.id === productId)
    if (!product) return
    addProductToCart(product, 1)
    showAddToCartNotification(product.title)
}

updateCartCount()