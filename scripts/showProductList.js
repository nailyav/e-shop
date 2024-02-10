import ProductService from "./productService.js";
import Router from "./router.js";


export const showProducts = function() {
    let products = new ProductService();
    const router = new Router();

    const wrapper = document.getElementsByClassName('wrapper')[0];

    for (const product of products.getProductList()){

        const card = document.createElement('div');
        wrapper.appendChild(card);
        card.className = 'card';
        card.href = '/' + product.id;

        card.onclick = (e) => {
            if (e.target.tagName !== 'BUTTON'){
                e.preventDefault();
                router.loadRoute(card.href);
            }
        }

        card.innerHTML = `<img src="${product.img}" alt="${product.id}" style="height: 200px">`;
        card.innerHTML += `<h3 class="card-content" style="margin: 60px 50px; left: 0">${product.name}</h3>`;
        card.innerHTML += `<h3 class="card-content" style="margin: 60px 50px; right: 0">$${product.price}</h3>`;

        const button = document.createElement('button');
        card.appendChild(button);
        button.className = "add-to-cart card-content";
        button.style = "width: 100%";
        button.innerHTML = product.isInCart ? 'Remove from cart' : 'Add to cart';

        button.onclick = () => {
            product.isInCart = !product.isInCart;
            button.innerHTML = product.isInCart ? 'Remove from cart' : 'Add to cart';
        }
    }
}
