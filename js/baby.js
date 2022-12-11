import {renderProducts, getProducts} from "./utils.js";

var listProducts = getProducts(product => product["category"] === "baby");
listProducts.then(products => {
    renderProducts(products);
})