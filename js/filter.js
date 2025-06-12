const allCars = [
  {
    id: 1,
    brand: "Audi",
    model: "RS7",
    fuel: "Petrol",
    price: 60000,
    image: "./assets/images/audi-rs7.jpg",
  },
  {
    id: 2,
    brand: "BMW",
    model: "X5",
    fuel: "Diesel",
    price: 45000,
    image: "./assets/images/bmw-x5.jpg",
  },
  {
    id: 3,
    brand: "Ferrari",
    model: "SF90",
    fuel: "Petrol",
    price: 450000,
    image: "./assets/images/ferrari-sf90.jpg",
  },
];


function renderCars(cars, targetId = "carList") {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = ""; 
  cars.forEach((car) => {
    const div = document.createElement("div");
    div.className = "car-card"; 

    div.innerHTML = `
      <img src="${car.image}" alt="${car.brand} ${car.model}">
      <h3>${car.brand} ${car.model}</h3>
      <p>Тип палива: ${car.fuel}</p>
      <p>Ціна: $${car.price.toLocaleString()}</p>
      <button onclick="openBooking(${car.id})">Бронювати</button>
    `;

    container.appendChild(div);
  });
}


document
  .getElementById("filterForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    const { brand, fuel, priceMax } = Object.fromEntries(new FormData(this));

    const filtered = allCars.filter(
      (c) =>
        (!brand || c.brand === brand) &&
        (!fuel || c.fuel === fuel) &&
        (!priceMax || c.price <= +priceMax)
    );

    renderCars(filtered);
  });


function openBooking(carId) {
  const modal = document.getElementById("bookingModal");
  const bookingForm = document.getElementById("bookingForm");
  if (!modal || !bookingForm) return;

  bookingForm.carId.value = carId;
  modal.classList.remove("hidden");
}


document.getElementById("closeModal")?.addEventListener("click", () => {
  document.getElementById("bookingModal")?.classList.add("hidden");
});


renderCars(allCars);