// =============== MINI MART SCRIPT.JS ===============
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ======== GIỎ HÀNG ========
function renderCart() {
  const cartContainer = document.getElementById("cartItems");
  if (!cartContainer) return;
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Giỏ hàng của bạn đang trống.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <p><strong>${item.name}</strong> - ${item.price}₫ 
      <button class="remove-btn" onclick="removeFromCart(${index})">Xóa</button></p>
    `;
    cartContainer.appendChild(div);
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm sản phẩm vào giỏ!");
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// ======== ĐĂNG KÝ ========
const registerBtn = document.getElementById("registerBtn");
if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(u => u.email === email)) {
      alert("Email đã tồn tại!");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công! Hãy đăng nhập.");
    window.location.href = "login.html";
  });
}

// ======== ĐĂNG NHẬP ========
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      alert("Đăng nhập thành công!");
      localStorage.setItem("currentUser", email);
      window.location.href = "shop.html";
    } else {
      alert("Sai email hoặc mật khẩu!");
    }
  });
}

// ======== ĐĂNG XUẤT ========
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

// ======== LOAD TỰ ĐỘNG ========
window.onload = function () {
  const userDisplay = document.getElementById("userDisplay");
  const currentUser = localStorage.getItem("currentUser");

  if (userDisplay && currentUser) {
    userDisplay.textContent = `Xin chào, ${currentUser}`;
  }

  if (document.getElementById("cartItems")) {
    renderCart();
  }
};

window.addToCart = function (name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ!");
};

const cartItems = document.getElementById("cartItems");
if (cartItems) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
    const p = document.createElement("p");
    p.textContent = `${item.name} - ${item.price}đ`;
    cartItems.appendChild(p);
  });
  document.getElementById("totalPrice").textContent = `Tổng: ${total}đ`;
}