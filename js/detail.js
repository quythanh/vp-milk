import {Header, Footer} from './app.js';
import {getProducts, NumberFormat} from './utils.js';

const DetailPage = () => {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `<div class="product"></div>`;
    document.body.querySelector('.page-wrapper').append(container);
    
    let productID = localStorage.getItem('curID') || "0";
    var product = getProducts(product => product['id'] === productID);
    product.then(product => {
        console.log(product);
        product = product[0];
        container.querySelector('.product').innerHTML = `
            <div class="product-img">
                <img src="./img/${product["category"]}/${product["thumbnail"]}" alt="">
            </div>
            <div class="product-detail">
                <div class="product-name">${product["name"]}</div>
                <div class="product-price">${NumberFormat(product["price"])}</div>
                <div class="product-desc">${product["desc"] || ""}</div>
                <div class="product-actions">
                    <button type="button" style="padding: 5px 10px;">
                        <i class="fas fa-shopping-cart"></i> Add to cart
                    </button>
                </div>
            </div>
        `;
    })
}

const CreateApp = () => {
    Header();
    DetailPage();
    Footer();
}

CreateApp();