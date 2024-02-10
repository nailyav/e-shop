import ProductService from "./productService.js";
import Router from "./router.js";

const productService = new ProductService();
const products = [
    {
        name: "Cheese",
        price: 3.99,
        img: "assets/costco-renders_.png"
    },
    {
        name: "Tortillinas",
        price: 2.50,
        img: "assets/flat-bread-category.webp"
    },
    {
        name: "Meatball parmezan",
        price: 2.99,
        img: "assets/1.jpg"
    },
    {
        name: "Ground earth",
        price: 4.99,
        img: "assets/Harris-Products.webp"
    },
    {
        name: "Meatballs",
        price: 2.00,
        img: "assets/impossible-meatballs-homestyle-sku-image-retail-500x500_2x.png"
    },
    {
        name: "Premium bread",
        price: 1.99,
        img: "assets/modern-premium-bread-chennai-listing.png"
    },
    {
        name: "Pani puri",
        price: 1.50,
        img: "assets/PaniPuriConcentrate_front.jpg"
    },
    {
        name: "Pinapple jam",
        price: 3.50,
        img: "assets/pineapple-jam.jpg"
    },
    {
        name: "Beet chips",
        price: 4.99,
        img: "assets/321306_1_600.webp"
    },
    {
        name: "Hot lime pickle",
        price: 5.00,
        img: "assets/product1.png"
    }
]

for (const product of products){
    productService.createProduct(product.name, product.price, product.img);
}

const router = new Router();
router.loadRoute(window.location.pathname);
window.onpopstate = router.loadRoute.bind(router, window.location.pathname);

const button = document.getElementById('header-button');
button.href = '/cart';
button.onclick = (e) => {
    e.preventDefault();
    router.loadRoute('/cart');
};