function openBooking(carId) {
  document.querySelector("#bookingModal").classList.remove("hidden");
  document.querySelector("[name='carId']").value = carId;
}

document.getElementById("closeModal")?.addEventListener("click", () => {
  document.querySelector("#bookingModal").classList.add("hidden");
});

document.getElementById("bookingForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const { carId, start, end } = this;
  let user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) return alert("Авторизуйтесь!");
  const users = JSON.parse(localStorage.getItem("users"));
  const index = users.findIndex(u => u.email === user.email);
  users[index].orders.push({ carId: +carId.value, start: start.value, end: end.value });
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(users[index]));
  alert("Бронювання збережено");
  location.href = "dashboard.html";
});
