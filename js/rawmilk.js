import {renderProducts, getProducts} from "./utils.js";

var listProducts = getProducts(product => product["category"] === "rawmilk");
listProducts.then(products => {
    renderProducts(products);
})