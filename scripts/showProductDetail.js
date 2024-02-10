import ProductService from "./productService.js"
import { buttonHandle } from "./buttonHandle.js";

export const showProductDetail = function(id) {
    const productService = new ProductService();
    const product = productService.getProductList().find(product => product.id == id);

    const card = document.getElementById("product-detail");

    card.innerHTML = `<img src="${product.img}" alt="${product.id}" style="height: 200px">`;
    card.innerHTML += `<h3>Product name: ${product.name}</h3><h3>Price: $${product.price}</h3>`;

    const button = document.createElement('button');
    card.appendChild(button);
    button.innerHTML = productService.isInCart(id) ? 'Remove from cart' : 'Add to cart';

    button.onclick = () => {
        button.innerHTML = buttonHandle(product.id);
    }
}