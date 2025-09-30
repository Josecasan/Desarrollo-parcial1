document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    const errorDiv = document.getElementById('loginError');

    const USER = "admin";
    const PASS = "1234";

    if (user === USER && pass === PASS) {
        window.location.href = "index.html";
    } else {
        errorDiv.textContent = "Usuario o contraseña incorrectos.";
    }
});