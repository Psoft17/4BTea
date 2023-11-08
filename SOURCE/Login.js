document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;

    if (username === "Admin" && password === "123") {
        // Display the loader
        document.querySelector('.custom-loader').style.display = 'block';

        // Wait for 3 seconds before taking any further action
        setTimeout(function () {
            // You can add your actual login logic here
            // For example, redirecting the user to a different page
            window.location.href = "SOURCE/Home.html";
        }, 3000);
    } else {
        // If username or password is incorrect, show an alert
        alert("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.");
    }
});
