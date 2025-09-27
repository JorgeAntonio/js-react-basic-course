const productsContainer = document.getElementById('products')

let products = []

async function getAllProducts() {
    showLoading()
    const response = await fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => products = data);

    response.forEach(product => {
        const productElemet = document.createElement('div')
        productElemet.classList.add('product')
        productElemet.innerHTML = `
                <div class='product'>
                    <a href='details.html?id=${product.id}'>
                        <img class='product-image' src='${product.image}' alt='${product.title}'>
                        <h1 class='product-title'>${product.title}</h1> 
                    </a>
                    <p class='product-price'>${product.price}</p>
                    <button class='product-add' type='button' onclick='addToCart(${product.id})'>
                        Agregar al carrito
                    </button>
                </div>
            `

        productsContainer.appendChild(productElemet)
    });
    hideLoading()
}

getAllProducts()

function addToCart(productId) {
    const product = products.find(p => p.id === productId)
    if (!product) return

    addProductToCart(product, 1)
    showAddToCartNotification(product.title)
}

updateCartCount()