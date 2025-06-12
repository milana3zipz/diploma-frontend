const form = document.getElementById("addCarForm");
const bookings = document.getElementById("adminBookings");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    allCars.push({ ...data, id: allCars.length + 1, price: +data.price });
    alert("Авто додано!");
    form.reset();
  });
}

if (bookings) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  users.forEach(u => {
    u.orders.forEach(o => {
      const car = allCars.find(c => c.id === o.carId);
      bookings.innerHTML += `<p><b>${u.email}</b>: ${car.brand} ${car.model} (${o.start} - ${o.end})</p>`;
    });
  });
}
