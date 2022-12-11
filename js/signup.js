function signup(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var sdt = document.getElementById("sdt").value;
    var password = document.getElementById("password").value;
    var user = {
        username : username,
        sdt : sdt,
        password : password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(sdt,json);
    if(username == 0 || sdt == 0 || password == 0){
        alert("Vui lòng điền thông tin")
    }
    else{
    alert("Đăng ký thành công")
    window.location.href="login.html"
    }
    
}