const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const ordersBlock = document.getElementById("orders");

if (ordersBlock && currentUser) {
  if (!currentUser.orders.length) {
    ordersBlock.innerHTML = "<p>Бронювань немає</p>";
  } else {
    currentUser.orders.forEach((o, i) => {
      const car = allCars.find(c => c.id === o.carId);
      ordersBlock.innerHTML += `<div><h4>${car.brand} ${car.model}</h4><p>${o.start} - ${o.end}</p><button onclick="cancelBooking(${i})">Скасувати</button></div>`;
    });
  }
}

function cancelBooking(index) {
  const users = JSON.parse(localStorage.getItem("users"));
  const i = users.findIndex(u => u.email === currentUser.email);
  users[i].orders.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(users[i]));
  location.reload();
}
