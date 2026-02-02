const totalPriceElement = document.querySelector('.total');

// Function to update total price based on current DOM
function updateTotal() {
  let total = 0;

  // Select all remaining products dynamically
  const products = document.querySelectorAll('.list-products .card');

  products.forEach(product => {
    const price = parseFloat(product.querySelector('.unit-price').textContent);
    const quantity = parseInt(product.querySelector('.quantity').textContent);
    total += price * quantity;
  });

  totalPriceElement.textContent = `${total} $`;
}

// Add event listeners to all products (using delegation)
document.querySelector('.list-products').addEventListener('click', (e) => {
  const target = e.target;

  // Find the card the clicked element belongs to
  const card = target.closest('.card');
  if (!card) return;

  const quantityElement = card.querySelector('.quantity');

  // Increase quantity
  if (target.classList.contains('fa-plus-circle')) {
    quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
    updateTotal();
  }

  // Decrease quantity
  if (target.classList.contains('fa-minus-circle')) {
    let qty = parseInt(quantityElement.textContent);
    if (qty > 0) {
      quantityElement.textContent = qty - 1;
      updateTotal();
    }
  }

  // Delete card
  if (target.classList.contains('fa-trash-alt')) {
    card.remove();
    updateTotal();
  }

  // Like card
  if (target.classList.contains('fa-heart')) {
    target.style.color = target.style.color === 'red' ? 'black' : 'red';
  }
});

// Initial total
updateTotal();
