let product = {}
let quantity = 1
let addedToCart = false

const productId = new URLSearchParams(window.location.search).get('id')
const productsContainer = document.getElementById('product')

async function getSingleProduct() {
    await fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(data => product = data);

    productsContainer.innerHTML = `
        <div class='product-details'>
            <img>
        
        </div>
        
        
        `
}

getSingleProduct()
