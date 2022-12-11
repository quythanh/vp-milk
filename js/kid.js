import {renderProducts, getProducts} from "./utils.js";

var listProducts = getProducts(product => product["category"] === "kid");
listProducts.then(products => {
    renderProducts(products);
})