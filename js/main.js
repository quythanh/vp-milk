import {renderProducts, getProducts} from "./utils.js";

var listProducts = getProducts();
listProducts.then(products => {
    renderProducts(products);
})