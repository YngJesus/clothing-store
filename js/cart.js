document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const checkoutButton = document.querySelector("#checkoutButtonEnd a");

  function updateCheckoutButton() {
    if (cart.length === 0) {
      checkoutButton.classList.add("disabled");
      checkoutButton.setAttribute("aria-disabled", "true");
    } else {
      checkoutButton.classList.remove("disabled");
      checkoutButton.removeAttribute("aria-disabled");
    }
  }

  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      "<tr><td colspan='5'>Your cart is empty.</td></tr>";
    cartTotal.textContent = "Total: 0.00 DT";
    updateCheckoutButton();
    return;
  }

  function renderCart() {
    cartItemsContainer.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {
      if (!product.quantity) {
        product.quantity = 1;
      }

      // Calculate the total price for this item
      const itemTotal = product.price * product.quantity;
      total += itemTotal;

      // Create a new table row with product details
      const row = document.createElement("tr");
      row.innerHTML = `
        <td class="text-center bg-light">
          <img src="${product.image}" alt="${
        product.name
      }" width="100" class="img-fluid mb-2">
          <h5>${product.name}</h5>
        </td>
        <td class="bg-secondary-subtle">
          <h4 class="text-center mt-5">${product.price.toFixed(2)} DT</h4>
        </td>
        <td class="bg-light text-center align-middle">
          <div class="d-flex justify-content-center align-items-center mt-4">
            <input 
              type="number" 
              class="form-control text-center" 
              value="${product.quantity}" 
              min="1" 
              data-index="${index}" 
              style="width: 10rem; font-size: 1rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);" 
            />
          </div>
        </td>
        <td class="bg-secondary-subtle">
          <h4 class="text-center mt-5">${itemTotal.toFixed(2)} DT</h4>
        </td>
        <td class="text-center bg-light">
          <div
            class="p-1 rounded-3 custom-cart-action"
            data-index="${index}"
            style="cursor: pointer"
          >
            <img src="img/remove.png" alt="Remove item" />
          </div>
        </td>
      `;

      cartItemsContainer.appendChild(row);
    });

    // Update the total price display
    cartTotal.textContent = `Total: ${total.toFixed(2)} DT`;

    updateCheckoutButton();
  }

  // Event listener to handle quantity updates in the cart
  cartItemsContainer.addEventListener("input", (e) => {
    if (e.target.type === "number") {
      const index = e.target.getAttribute("data-index");
      cart[index].quantity = parseInt(e.target.value, 10);
      localStorage.setItem("cart", JSON.stringify(cart));
      x;
      renderCart();
    }
  });

  // Event listener to handle item removal from the cart
  cartItemsContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" || e.target.tagName === "IMG") {
      const index = e.target.getAttribute("data-index");
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }
  });

  // Event listener to clear the entire cart
  document.getElementById("clearCart").addEventListener("click", () => {
    localStorage.removeItem("cart");
    cart.length = 0;
    renderCart();
  });

  // Initial render of the cart and button state
  renderCart();
  updateCheckoutButton();
});
