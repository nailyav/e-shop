export default class ProductCard {
    constructor(id, name, price, img) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.isInCart = false;
    }
}