document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'beining' && password === '20060813') {
            window.location.href = 'index.html'; // 假设登录成功后跳转到首页
            window.isUserLoggedIn = true;
        } else {
            errorMessage.textContent = '用户名或密码错误！';
            errorMessage.style.display = 'block';
        }
    });
});