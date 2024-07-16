const productListDiv = document.getElementById('product-list');
const searchButton = document.getElementById('search-products');

searchButton.addEventListener('click', async () => {
    try {
        const response = await fetch('/api/v1/products');
        const products = await response.json();

        productListDiv.innerHTML = '';

        products.forEach(product => {
            const productElement = document.createElement('p');
            productElement.textContent = `${product.name} ($${product.price})`;
            productListDiv.appendChild(productElement);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        productListDiv.textContent = 'Error fetching products.';
    }
});