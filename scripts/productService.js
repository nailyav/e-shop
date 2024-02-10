import ProductCard from "./productCard.js";
import { productList } from "./productList.js";


export default function ProductService() {
    const products = productList.get();

    this.getProductList = function() {
        return products;
    }

    this.createProduct = function(name, price, img) {
        const id = products.length > 0 ? products.at(-1).id + 1 : 1;
        
        products.push(new ProductCard(id, name, price, img))
        productList.set(products);
        return products;
    };

    this.deleteProduct = function(id) {
        const index = products.findIndex((product) => { return product.id === id });
        
        try {
            products.splice(index, 1);
            productList.set(products);
            return products;
        } 
        catch (error) {
            return error;
        }
    };

    this.addToCart = function(id) {
        if (!cart.find(item => item == id)){
            cart.push(id.toString());
            document.cookie = `cart=${cart.join(',')}`;
        }
        return cart;
    }

    this.deleteFromCart = function(id) {
        const index = cart.findIndex(item => item == id);
        if (index !== -1){
            cart.splice(index, 1);
            document.cookie = `cart=${cart.join(',')}`;
        }
        return cart;
    }

    this.emptyCart = function() {
        document.cookie = "cart=";
        cart = [];
        return cart;
    }

    this.isInCart = function(id) {
        if (cart.find(item => item == id)){
            return true;
        }
        return false;
    }

    this.getCart = function() {
        const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)cart\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        return cookie === "" ? [] : cookie.split(',');
    }

    let cart = this.getCart();
    document.cookie = "SameSite=None; Secure";
}