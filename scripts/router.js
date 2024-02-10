import ProductService from "./productService.js"
import { showProducts } from "./showProductList.js";
import { showCart } from "./showCart.js";
import { showProductDetail } from "./showProductDetail.js";

export default class Router {

    constructor() {
        this.routes = {
            "/": {
                template: 'templates/index.html',
                script: showProducts
            },
            "/cart": {
                template: 'templates/cart.html',
                script: showCart
            },
            "/product": {
                template: 'templates/product.html',
                script: id => showProductDetail(id)
            }
        };
    }
  
    async loadRoute(url) {
        if (this.checkPath(url)){
            const route = this.routes[url] || this.routes["/product"];
            window.history.pushState({}, '', url);
            const html = await fetch(route.template).then((response) => response.text());
            document.getElementById("content").innerHTML = html;
            if (route.script) {
                route.script(url.slice(1));
            }
        }
    }

    checkPath(url) {
        const productService = new ProductService();
        const products = productService.getProductList();

        const pathSegments = url.split('/');
        if (pathSegments.length > 2){
            return false;
        }
        const id = pathSegments[1];
        if (!this.routes[url]){
            if (!products.find(product => product.id == id)){
                return false;
            }
        }
        return true;
    }
}