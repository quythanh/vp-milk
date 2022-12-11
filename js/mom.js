import {renderProducts, getProducts} from "./utils.js";

var listProducts = getProducts(product => product["category"] === "Mom");
listProducts.then(products => {
    renderProducts(products);
})