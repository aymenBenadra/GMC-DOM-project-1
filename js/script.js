// Select all products
const products = document.querySelectorAll('.card-body');
const totalPriceElement = document.querySelector('.total');

// Function to update the total price
function updateTotal() {
  let total = 0;
  products.forEach(product => {
    const priceText = product.querySelector('.unit-price').textContent; // "100 $"
    const price = parseFloat(priceText); // convert to number
    const quantity = parseInt(product.querySelector('.quantity').textContent);
    total += price * quantity;
  });
  totalPriceElement.textContent = `${total} $`;
}

// Loop through each product to add event listeners
products.forEach(product => {
  const plusBtn = product.querySelector('.fa-plus-circle');
  const minusBtn = product.querySelector('.fa-minus-circle');
  const deleteBtn = product.querySelector('.fa-trash-alt');
  const likeBtn = product.querySelector('.fa-heart');
  const quantityElement = product.querySelector('.quantity');

  // Increase quantity
  plusBtn.addEventListener('click', () => {
    quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
    updateTotal();
  });

  // Decrease quantity
  minusBtn.addEventListener('click', () => {
    let qty = parseInt(quantityElement.textContent);
    if (qty > 0) {
      quantityElement.textContent = qty - 1;
      updateTotal();
    }
  });

  // Delete product
  deleteBtn.addEventListener('click', () => {
    product.remove();
    updateTotal();
  });

  // Like product
  likeBtn.addEventListener('click', () => {
    if (likeBtn.style.color === 'red') {
      likeBtn.style.color = 'black';
    } else {
      likeBtn.style.color = 'red';
    }
  });
});

// Initial calculation
updateTotal();
