const NumberFormat = (num) => {
    return Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(num)
}

const renderProducts = products => {
    let listProducts = document.querySelector("ul.products");
    listProducts.innerHTML = '';
    products.map(product => {
        var li = document.createElement('li');
        li.innerHTML = `
            <div class="product-item">
                <div class="product-top">
                    <a href="detail.html" class="product-thumb">
                        <img src="img/${product['category']}/${product['thumbnail']}" alt="${product['name']}">
                    </a>
                    <a href="#" class="addtocart">Thêm vào giỏ hàng</a>
                </div>
                <div class="product-info">
                    <a href="#" class="product-name">${product['name']}</a>
                    <div class="product-price">${NumberFormat(product['price'])}</div>
                </div>
            </div>
        `;
        listProducts.append(li);

        li.querySelector('.product-thumb').addEventListener('click', e => {
            localStorage.setItem("curID", product['id']);
        })
    })
}


const getProducts = async (criteria = product => product) => {
    let res = await fetch("./data/products.json");
    let listProducts = await res.json();
    listProducts = listProducts.filter(criteria);
    localStorage.setItem('listProducts', JSON.stringify(listProducts));
    return listProducts;
}

const getParameterByName = (name, url = window.location.href) => {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export {renderProducts, getProducts, getParameterByName, NumberFormat};