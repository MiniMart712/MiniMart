document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find(u => u.username === username && u.password === password);

  if(user){
    // lưu trạng thái đăng nhập
    localStorage.setItem('loggedInUser', username);
    window.location.href = 'index.html'; // chuyển đến trang chính
  } else {
    document.getElementById('message').textContent = 'Sai tên đăng nhập hoặc mật khẩu!';
  }
});