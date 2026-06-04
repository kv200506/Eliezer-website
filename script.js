function filterProducts(category) {
  const cards = document.querySelectorAll('.card');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function addToCart(name, price) {
  const popup = document.getElementById('cartPopup');
  const message = document.getElementById('cartMessage');
  message.textContent = `${name} added to cart!`;
  popup.classList.add('show');
  setTimeout(() => popup.classList.remove('show'), 2500);
}

function submitForm(event) {
  event.preventDefault();
  const popup = document.getElementById('cartPopup');
  const message = document.getElementById('cartMessage');
  message.textContent = 'Message sent successfully!';
  popup.classList.add('show');
  setTimeout(() => popup.classList.remove('show'), 2500);
  event.target.reset();
}