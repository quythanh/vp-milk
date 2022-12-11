const renderProducts = products => {
    document.querySelector("ul.products").innerHTML = products.map(product => `
        <li>
            <div class="product-item">
                <div class="product-top">
                    <a href="#" class="product-thumb">
                        <img src="img/${product['category']}/${product['thumbnail']}" alt="${product['name']}">
                    </a>
                    <a href="#" class="addtocart">Thêm vào giỏ hàng</a>
                </div>
                <div class="product-info">
                    <a href="#" class="product-name">${product['name']}</a>
                    <div class="product-price">${product['price']} VND</div>
                </div>
            </div>
        </li>
    `).join("")
}


const getProducts = async (criteria = product => product) => {
    let res = await fetch("./data/products.json");
    let listProducts = await res.json();
    return listProducts.filter(criteria);
}

const getParameterByName = (name, url = window.location.href) => {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export {renderProducts, getProducts, getParameterByName};