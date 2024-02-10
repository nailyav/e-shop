import ProductCard from "./productCard.js";
import { productList } from "./productList.js";


export default function ProductService() {
    const products = productList.get();

    this.getProductList = function (){
        return products;
    }

    this.createProduct = function (name, price, img) {
        const id = products.length > 0 ? products.at(-1).id + 1 : 1;
        
        products.push(new ProductCard(id, name, price, img))
        productList.set(products);
        return products;
    };

    this.deleteProduct = function (id) {
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

    this.addToCart = function (id) {
        const product = products.find((product) => { return product.id === id });
        product.isInCart = true;
    };

    this.deleteFromCart = function (id) {
        const product = products.find((product) => { return product.id === id });
        product.isInCart = false;
    };
}