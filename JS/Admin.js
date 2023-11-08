document.getElementById("login-form").addEventListener("submit", function(event) {
event.preventDefault(); 
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;
if (username === "Admin" && password === "123") {
 window.location.href = "SOURCE/Home.html"; 
} else {
alert("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.");
}
});
                            