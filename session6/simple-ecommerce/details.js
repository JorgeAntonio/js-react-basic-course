const productId = new URLSearchParams(window.location.search).get('id')
const productContainer = document.getElementById('product')

let product = {}
let quantity = 1

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--
        document.querySelector('#quantity').textContent = quantity
    }
}

function increaseQuantity() {
    quantity++
    document.querySelector('#quantity').textContent = quantity
}

function addToCart(){
    addProductToCart(product, quantity)
    showAddToCartNotification(product.title)
}

async function getSingleProduct() {
    showLoading()
    await fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(data => product = data);
    hideLoading()

    productContainer.innerHTML = `
            <div class="product-details">
                <img src="${product.image}" alt="${product.title}" class="product-info-image"> 
                <div class="product-info">
                    <section class="product-rating">
                        ${Array.from({ length: product.rating.rate }, (_, index) => index + 1).map(() => `
                            <img src="assets/star.svg" alt="Star" class="product-rating-star"> 
                        `).join('')}
                        <span class="product-rating-rate">${product.rating.rate}</span>
                        <span class="product-rating-count">(${product.rating.count})</span>
                    </section>
                    <p class="product-category">${product.category}</p>
                    <h2>${product.title}</h2>
                    <p class="product-price">$.${product.price.toFixed(2)}</p>
                    <p>${product.description}</p>
                    <section class="product-actions">
                        <div class="product-quantity">
                            <button onclick="decreaseQuantity()" class="quantity-btn" type="button">-</button>
                            <span id="quantity">${quantity}</span>
                            <button onclick="increaseQuantity()" class="quantity-btn" type="button">+</button>
                        </div>
                        <button onclick="addToCart()" class="product-add type="button">Agregar al carrito</button>
                    </section>
                </div>
            </div>
        `
}


getSingleProduct()
updateCartCount()