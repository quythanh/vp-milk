import {renderProducts, getProducts} from "./utils.js";

var listProducts = getProducts(product => product["category"] === "old");
listProducts.then(products => {
    renderProducts(products);
})