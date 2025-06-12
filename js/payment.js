document.querySelector('#confirm-payment').addEventListener('click', async () => {
  const order = {
    name: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    car: document.querySelector('#car').value,
    amount: document.querySelector('#amount').value,
    paymentMethod: document.querySelector('input[name="method"]:checked').value
  };

  try {
    const res = await fetch('https://carrentalapp-md6a.onrender.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    });

    const data = await res.json();
    alert(data.message);
    if (res.ok) window.location.href = 'success.html';
  } catch (err) {
    alert('Error sending order: ' + err.message);
  }
});
