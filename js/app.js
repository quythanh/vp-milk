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

const Footer = () => {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <a>
            <i class='fas fa-map-marker-alt'></i>
            MST: 0838338637
            <br>
            Địa chỉ: 273 An Dương Vương,Phường 3, Quận 5, Thành phố Hồ Chí Minh
        </a>
        <br /><br />
        <div>
            <img src="img/logo_bct.webp" width="200" height="76" alt="Logo bộ công thương">
        </div>
    `;
    document.body.querySelector('.page-wrapper').append(footer);
}

export {Header, Footer};