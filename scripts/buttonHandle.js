import ProductService from "./productService.js";

export const buttonHandle = (id) => {
    const productService = new ProductService();
    let message = '';
    if (productService.isInCart(id)){
        productService.deleteFromCart(id);
        message = 'Add to cart';
    } else {
        productService.addToCart(id);
        message = 'Remove from cart';
    }
    return message;
}
