document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Here you can implement your authentication logic, e.g., send a request to the server
    console.log('Username:', username);
    console.log('Password:', password);
    // Once authenticated, you can redirect the user to another page or perform further actions
});
