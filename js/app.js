import {renderProducts, getProducts} from "./utils.js";

const Header = () => {
    const header = document.createElement('header');
    header.className = 'navbar';
    header.innerHTML = `
        <a href="index.html" class="icon">
            <img src="img/logovpmilkk.webp" alt="Milk" class="logo">
        </a>

        <form class="search" action="./search.html">
            <input type="search" name="search" id="search" placeholder="Tìm theo tên sản phẩm...">
            <button type="submit" class="button-search"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>

        <div class="menu-icon">
            <div class="phone-box">
                <a href="#"><button class="button-phone"><i class="fa-solid fa-phone-volume"></i></button></a>
                <label for="support">
                    Hỗ trợ khách hàng <br />
                    <a href="#" class="number-phone">
                        19007158
                    </a>
                </label>
            </div>

            <div class="profile-box">
                <a href="#"><button class="button-profile"><i class="fa-regular fa-user"></i></button></a>
                <label for="login">
                    Tài khoản <br />
                    <a href="login.html" class="login-file">Đăng nhập</a>
                </label>
            </div>

            <div class="shop-box">
                <a href="#"><button class="button-shop"><i class="fa-solid fa-cart-shopping"></i>
                        <div class="number-order"><label for="number">0</label></div>
                    </button></a>
                <div class="no-cart-list">
                    <img src="img/cart_no.png" alt="" class="no-cart-list-img">
                    <samp class="no-cart-msg">
                        Chưa có sản phẩm
                    </samp>
                </div>
            </div>
        </div>
    `;
    document.body.querySelector('.page-wrapper').prepend(header);
}

const Container = () => {
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
            <li><a href="./baby.html">Sữa Cho Bé Sở Sinh</a></li>
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
    Container();
}

CreateApp();