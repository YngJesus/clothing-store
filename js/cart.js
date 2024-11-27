// Wait until the DOM content is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Retrieve the cart data from localStorage, or initialize an empty array if not found
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Get references to DOM elements that will display the cart items and total price
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const checkoutButton = document.querySelector("#checkoutButtonEnd a");

  // Function to enable/disable the checkout button based on whether the cart is empty or not
  function updateCheckoutButton() {
    // If the cart is empty, disable the checkout button
    if (cart.length === 0) {
      checkoutButton.classList.add("disabled");
      checkoutButton.setAttribute("aria-disabled", "true");
    } else {
      // Otherwise, enable the checkout button
      checkoutButton.classList.remove("disabled");
      checkoutButton.removeAttribute("aria-disabled");
    }
  }

  // If the cart is empty, display a message and set the total to 0.00
  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      "<tr><td colspan='5'>Your cart is empty.</td></tr>";
    cartTotal.textContent = "Total: 0.00 DT";
    updateCheckoutButton(); // Ensure the checkout button is updated correctly
    return;
  }

  // Function to render the cart items into the table
  function renderCart() {
    // Clear the cart container before adding new content
    cartItemsContainer.innerHTML = "";

    let total = 0; // Initialize total price to 0

    // Loop through each product in the cart and create a row for it
    cart.forEach((product, index) => {
      // If a product does not have a quantity, set it to 1
      if (!product.quantity) {
        product.quantity = 1;
      }

      // Calculate the total price for this item
      const itemTotal = product.price * product.quantity;
      total += itemTotal; // Add this item’s total to the overall cart total

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
            <img src="./img/remove.png" alt="Remove item" />
          </div>
        </td>
      `;

      // Append the newly created row to the cart items container
      cartItemsContainer.appendChild(row);
    });

    // Update the total price display
    cartTotal.textContent = `Total: ${total.toFixed(2)} DT`;

    // Update the checkout button state after rendering the cart
    updateCheckoutButton();
  }

  // Event listener to handle quantity updates in the cart
  cartItemsContainer.addEventListener("input", (e) => {
    // Check if the input element is a number (quantity input field)
    if (e.target.type === "number") {
      const index = e.target.getAttribute("data-index"); // Get the index of the product being updated
      cart[index].quantity = parseInt(e.target.value, 10); // Update the quantity in the cart array
      localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart to localStorage
      renderCart(); // Re-render the cart to reflect the changes
    }
  });

  // Event listener to handle item removal from the cart
  cartItemsContainer.addEventListener("click", (e) => {
    // Check if the click event was on a remove button or image
    if (e.target.tagName === "BUTTON" || e.target.tagName === "IMG") {
      const index = e.target.getAttribute("data-index"); // Get the index of the product to remove
      cart.splice(index, 1); // Remove the item from the cart array
      localStorage.setItem("cart", JSON.stringify(cart)); // Save the updated cart to localStorage
      renderCart(); // Re-render the cart after removal
    }
  });

  // Event listener to clear the entire cart
  document.getElementById("clearCart").addEventListener("click", () => {
    localStorage.removeItem("cart"); // Remove the cart from localStorage
    cart.length = 0; // Clear the cart array
    renderCart(); // Re-render the cart to show it's empty
  });

  // Initial render of the cart and button state
  renderCart();
  updateCheckoutButton(); // Ensure checkout button is correctly updated on load
});
