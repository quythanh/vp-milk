import {renderProducts, getProducts, getParameterByName} from "./utils.js";

var name = getParameterByName("search").toLowerCase();

var listProducts = getProducts(product => product["name"].toLowerCase().includes(name));
listProducts.then(products => {
    renderProducts(products);
    document.querySelector('#search').value = name;
})