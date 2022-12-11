import {Header, Footer} from './app.js';
import {renderProducts} from './utils.js'

const ProductsPage = () => {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
        <select name="price-range" class="filter">
            <option hidden> -- Chọn khoảng giá -- </option>
            <option>0 - 100.000</option>
            <option>100.000 - 200.000</option>
            <option>200.000 - 300.000</option>
            <option>300.000 - 400.000</option>
        </select>

        <ul class="list">
            <li><a href="./mom.html">Sữa Cho Mẹ Mang Thai</a></li>
            <li><a href="./baby.html">Sữa Cho Bé Sơ Sinh</a></li>
            <li><a href="./kid.html">Sữa Cho Trẻ</a></li>
            <li><a href="./old.html">Sữa Cho Người Già</a></li>
            <li><a href="./rawmilk.html">Sữa Tươi Tiệt Trùng 100%</a></li>
        </ul>

        <ul class="products"></ul>
    `;
    document.body.querySelector('.page-wrapper').append(container);

    document.querySelector('.filter').addEventListener('change', e => {
        let range = e.target.value.split(' - ').map(el => el.replace('.', '') - 0);
        var listProducts = JSON.parse(localStorage.getItem('listProducts'));
        listProducts = listProducts.filter(product => product['price'] >= range[0] && product['price'] <= range[1]);
        renderProducts(listProducts);
    })
}

const CreateApp = () => {
    Header();
    ProductsPage();
    Footer();
}

CreateApp();