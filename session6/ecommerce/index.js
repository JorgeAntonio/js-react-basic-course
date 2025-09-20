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
            </div>        
        `
        productContainer.appendChild(productElement)
    });
    hideLoading()
}

// Inicializamos la peticion
fetchProducts()

updateCartCount()