// js/common.js
document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const wish = JSON.parse(localStorage.getItem("wish")) || [];
  // Function to render products in the wishlist modal
  const wishIcon = document.querySelector('.navbar img[alt="Wishlist"]');

  // Function to update the cart icon
  function updateCartIcon() {
    const cartBadge = document.querySelector(".cart-badge");

    if (!cartBadge) {
      const badge = document.createElement("span");
      badge.classList.add("cart-badge");
      badge.style.cssText = `
          position: absolute;
          top: 30px;
          right: -2px;
          background-color: black;
          color: white;
          border-radius: 50%;
          padding: 0.2rem 0.5rem;
          font-size: 12px;
          font-weight: bold;
        `;
      badge.innerText = cart.length;
      const cartIcon = document.querySelector('.navbar img[alt="Cart"]');
      cartIcon.parentNode.appendChild(badge);

      // Add click event listener to the cart icon
      cartIcon.parentNode.addEventListener("click", function () {
        window.location.href = "./cart.html";
      });
    } else {
      cartBadge.innerText = cart.length;
    }
  }

  // Call the function to update the cart icon
  updateCartIcon();

  function updateWishIcon() {
    // Add a dynamic badge or update its content
    const wishBadge = document.querySelector(".wish-badge");

    if (!wishBadge) {
      // Create a new badge if it doesn't exist
      const badge = document.createElement("span");
      badge.classList.add("wish-badge");
      badge.style.cssText = `
        position: absolute;
        top: 30px;
        right: 65px;
        background-color: black;
        color: white;
        border-radius: 50%;
        padding: 0.2rem 0.5rem;
        font-size: 12px;
        font-weight: bold;
      `;
      badge.innerText = wish.length;
      const wishIcon = document.querySelector('.navbar img[alt="Wishlist"]');
      wishIcon.parentNode.appendChild(badge);
    } else {
      // Update the existing badge
      wishBadge.innerText = wish.length;
    }
  }

  updateCartIcon();
  updateWishIcon();

  function renderWishlistInModal() {
    const wishlistModalBody = document.getElementById("wishlistModalBody");
    wishlistModalBody.innerHTML = ""; // Clear the modal body before adding new products

    if (wish.length === 0) {
      wishlistModalBody.innerHTML = "<p>Your wishlist is empty.</p>";
    } else {
      wish.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("card", "mb-3");
        productCard.style.maxWidth = "540px";
        productCard.innerHTML = `
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${product.image}" class="img-fluid rounded-start" alt="${product.name}">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price} ${product.currency}</p>
                    <button class="btn btn-danger remove-from-wishlist-btn">Remove</button>
                  </div>
                </div>
              </div>
            `;

        // Event listener to remove the product from the wishlist
        const removeFromWishlistBtn = productCard.querySelector(
          ".remove-from-wishlist-btn"
        );
        removeFromWishlistBtn.addEventListener("click", () => {
          removeFromWishlist(product);
          renderWishlistInModal(); // Re-render the modal after removal
        });

        wishlistModalBody.appendChild(productCard);
      });
    }
  }

  // Function to remove product from the wishlist
  function removeFromWishlist(product) {
    const productIndex = wish.findIndex((item) => item.name === product.name);
    if (productIndex !== -1) {
      wish.splice(productIndex, 1); // Remove the product from the array
      localStorage.setItem("wish", JSON.stringify(wish)); // Update the wishlist in localStorage
      updateWishIcon(); // Update the wishlist icon
    }
  }

  // Event listener for the wishlist icon click
  wishIcon.addEventListener("click", () => {
    console.log("Wishlist icon clicked");
    renderWishlistInModal(); // Populate the modal with wishlist products
    const wishlistModal = new bootstrap.Modal(
      document.getElementById("wishlistModal")
    );
    wishlistModal.show(); // Show the modal
    console.log("Modal should be shown");
  });
});
