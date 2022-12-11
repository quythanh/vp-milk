function login(e){
    event.preventDefault();
    var sdt = document.getElementById("sdt").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(sdt)
    var data = JSON.parse(user);
   

    if (!sdt || !password) {
        alert("Vui lòng nhập đầy đủ thông tin");
      }
    else if(sdt ==data.sdt && password==data.password){
        alert("Đăng nhập thành công")
        window.location.href="index.html"
    }
    else{
        alert("Đăng nhập thất bại")
    }

}