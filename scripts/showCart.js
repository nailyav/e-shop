import ProductService from "./productService.js";

export const showCart = function() {
    let products = new ProductService();
    const cart = [];

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

    for (const product of products.getProductList()){

        if (product.isInCart){
            cart.push(product);

            const row = document.createElement('div');
            wrapper.appendChild(row);
            row.className = 'row';

            row.innerHTML = `<img class="row-content" src="${product.img}" alt="${product.id}" style="height: 60px">`;
            row.innerHTML += `<h3 class="row-content" style="margin-left: 70px">${product.name}</h3>`;
            row.innerHTML += `<h3 class="row-content" style="right: 0">$${product.price}<button id="button${product.id}" style="margin-left: 20px">Remove</button></h3>`;

            const button = document.getElementById(`button${product.id}`);
            button.onclick = () => {
                product.isInCart = false;
                row.remove();
            }
        }
    }
}
