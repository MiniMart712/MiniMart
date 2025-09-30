document.getElementById('registerForm').addEventListener('submit', function(e){
  e.preventDefault();
  const username = document.getElementById('newUsername').value.trim();
  const password = document.getElementById('newPassword').value.trim();
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // kiểm tra trùng tên
  if(users.some(user => user.username === username)){
    document.getElementById('message').textContent = 'Tên đăng nhập đã tồn tại!';
    return;
  }

  users.push({username, password});
  localStorage.setItem('users', JSON.stringify(users));
  document.getElementById('message').style.color='green';
  document.getElementById('message').textContent = 'Đăng ký thành công! Hãy đăng nhập.';
  this.reset();
});