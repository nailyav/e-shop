import ProductService from "./productService.js";

export const showCart = function() {
    const productService = new ProductService();
    const products = productService.getProductList();
    let cart = productService.getCart();

    const wrapper = document.getElementById('cart-wrapper');
    const submitButton = document.getElementById('submit');

    submitButton.onclick = () => {
        const alert = document.getElementsByClassName('alert')[0];
        if (cart.length === 0){
            alert.style = "background-color: red";
            alert.innerHTML = "No items in the cart!";
        }
        alert.style.display = "flex";
        setTimeout(function(){ alert.style.display = "none"; }, 1000);
    }

    for (const id of cart){
        const product = products.find(product => product.id == id);

        const row = document.createElement('div');
        wrapper.appendChild(row);
        row.className = 'row';

        row.innerHTML = `<img class="row-content" src="${product.img}" alt="${id}" style="height: 60px">`;
        row.innerHTML += `<h3 class="row-content" style="margin-left: 70px">${product.name}</h3>`;
        row.innerHTML += `<h3 class="row-content" style="right: 0">$${product.price}<button id="button${id}" style="margin-left: 20px">Remove</button></h3>`;

        const button = document.getElementById(`button${id}`);
        button.onclick = () => {
            cart = productService.deleteFromCart(id);
            row.remove();
        }
    }
}
