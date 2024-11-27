document.addEventListener("DOMContentLoaded", () => {
  // Get the cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const orderSummaryContainer = document.getElementById("order-summary");

  // Function to render the Order Summary
  function renderOrderSummary() {
    orderSummaryContainer.innerHTML = ""; // Clear previous summary

    if (cart.length === 0) {
      orderSummaryContainer.innerHTML = `
          <li class="list-group-item d-flex justify-content-between">
            <span>Your cart is empty</span>
          </li>
        `;
      return;
    }

    let total = 0;

    cart.forEach((product) => {
      const price = parseFloat(product.price) || 0;
      const quantity = product.quantity || 1;
      const itemTotal = price * quantity;

      total += itemTotal;

      const listItem = document.createElement("li");
      listItem.className =
        "list-group-item d-flex justify-content-between lh-sm";
      listItem.innerHTML = `
          <div>
            <h5 class="my-5">${product.name}</h5>

          </div>
          <span class="text-muted d-flex justify-content-center align-items-center">${itemTotal.toFixed(
            2
          )} ${product.currency || "DT"}</span>
        `;
      orderSummaryContainer.appendChild(listItem);
    });

    // Add total summary
    const totalItem = document.createElement("li");
    totalItem.className = "list-group-item d-flex justify-content-between";
    totalItem.innerHTML = `
        <span><strong>Total</strong></span>
        <strong>${total.toFixed(2)} ${cart[0]?.currency || "DT"}</strong>
      `;
    orderSummaryContainer.appendChild(totalItem);
  }

  // Render the order summary on page load
  renderOrderSummary();
});
document
  .getElementById("checkout-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Simple confirmation alert
    alert("Thank you for your order! Your order has been placed successfully.");

    // Optionally, you can clear the form
    event.target.reset();

    // Redirect to the homepage
    window.location.href = "./index.html";
  });
