const users = JSON.parse(localStorage.getItem("users") || "[]");

document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const { email, password } = this;
  users.push({ email: email.value, password: password.value, orders: [] });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Успішна реєстрація!");
  location.href = "login.html";
});

document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const { email, password } = this;
  const user = users.find(u => u.email === email.value && u.password === password.value);
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    location.href = "dashboard.html";
  } else {
    alert("Невірні дані");
  }
});
