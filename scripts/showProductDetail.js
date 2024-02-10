import ProductService from "./productService.js"

export const showProductDetail = function(id) {
    const productService = new ProductService();
    const product = productService.getProductList().find(product => product.id == id);

    const card = document.getElementById("product-detail");

    card.innerHTML = `<img src="${product.img}" alt="${product.id}" style="height: 200px">`;
    card.innerHTML += `<h3>Product name: ${product.name}</h3><h3>Price: $${product.price}</h3>`;

    const button = document.createElement('button');
    card.appendChild(button);
    button.innerHTML = product.isInCart ? 'Remove from cart' : 'Add to cart';

    button.onclick = () => {
        product.isInCart = !product.isInCart;
        button.innerHTML = product.isInCart ? 'Remove from cart' : 'Add to cart';
    }
}